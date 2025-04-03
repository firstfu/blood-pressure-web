/\*\*

- @ Author: firstfu
- @ Create Time: 2024-05-19 21:15:34
- @ Description: Flutter 客戶端的 Apple 登入實現文檔
  \*/

# Flutter 客戶端的 Apple 登入實現

本文檔提供了在 Flutter 應用中實現 Apple 登入功能的詳細說明，使用 Supabase 作為認證後端。

## 所需依賴

首先，在你的 `pubspec.yaml` 文件中添加以下依賴：

```yaml
dependencies:
  flutter:
    sdk: flutter
  supabase_flutter: ^2.8.4 # Supabase Flutter 客戶端
  sign_in_with_apple: ^5.0.0 # Apple 登入支持
  crypto: ^3.0.3 # 用於生成和處理 nonce
  http: ^1.1.0 # HTTP 請求
  flutter_secure_storage: ^9.0.0 # 安全存儲用戶會話
```

安裝依賴：

```bash
flutter pub get
```

## iOS 配置

### 步驟 1: 配置 Xcode 項目

1. 打開你的 Flutter 項目的 `ios/Runner.xcworkspace` 文件
2. 在 Xcode 中，選擇你的項目，然後選擇 "Signing & Capabilities" 標籤
3. 點擊 "+ Capability" 按鈕，添加 "Sign in with Apple" 功能
4. 確保你已經設置了有效的 Apple Developer 帳戶和正確的 Bundle ID

### 步驟 2: 更新 Info.plist

打開 `ios/Runner/Info.plist` 文件並添加以下內容：

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <!-- 替換為你的反向域名 + 應用的唯一標識符 -->
            <string>com.yourdomain.yourapp.auth</string>
        </array>
    </dict>
</array>
```

## Android 配置

由於 Apple 登入主要在 iOS 設備上使用，Android 平台通常會通過網頁視圖實現。你需要進行以下配置：

### 更新 build.gradle

在 `android/app/build.gradle` 中確保設置了正確的 `minSdkVersion`：

```gradle
android {
    defaultConfig {
        // 其他配置...
        minSdkVersion 21
    }
}
```

## Supabase 配置

### 步驟 1: 在 Supabase 中啟用 Apple 登入

1. 登入你的 Supabase 項目
2. 導航到 Authentication > Providers
3. 啟用 "Apple" 提供者
4. 添加你從 Apple Developer 帳戶獲取的 Client ID 和 Secret

### 步驟 2: 初始化 Supabase Flutter 客戶端

在你的 Flutter 應用的 `main.dart` 文件中初始化 Supabase：

```dart
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Supabase.initialize(
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY',
    authFlowType: AuthFlowType.pkce,
  );

  runApp(MyApp());
}

// 全局 Supabase 客戶端實例
final supabase = Supabase.instance.client;
```

## 實現 Apple 登入

創建一個 `AuthService` 類來處理身份驗證邏輯：

```dart
import 'dart:convert';
import 'package:crypto/crypto.dart';
import 'package:flutter/material.dart';
import 'package:sign_in_with_apple/sign_in_with_apple.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:http/http.dart' as http;

class AuthService {
  final supabase = Supabase.instance.client;
  final String apiBaseUrl;

  AuthService({required this.apiBaseUrl});

  /// 檢查用戶是否已登入
  bool isUserLoggedIn() {
    return supabase.auth.currentUser != null;
  }

  /// 獲取當前用戶
  User? getCurrentUser() {
    return supabase.auth.currentUser;
  }

  /// 使用 Apple 進行登入
  Future<UserResponse?> signInWithApple() async {
    try {
      // 生成 nonce
      final rawNonce = _generateNonce();
      final hashedNonce = _sha256OfString(rawNonce);

      // 獲取 Apple 登入憑證
      final credential = await SignInWithApple.getAppleIDCredential(
        scopes: [
          AppleIDAuthorizationScopes.email,
          AppleIDAuthorizationScopes.fullName,
        ],
        nonce: hashedNonce,
      );

      // 處理 Apple 身份令牌
      final idToken = credential.identityToken;
      if (idToken == null) {
        throw const AuthException(
          'Could not find ID Token from Apple Sign In.',
        );
      }

      // 組合用戶姓名
      String? fullName;
      if (credential.givenName != null) {
        fullName = '${credential.givenName} ${credential.familyName ?? ''}';
        fullName = fullName.trim();
      }

      // 直接通過我們的 API 進行認證，這可以處理更複雜的認證邏輯
      final response = await http.post(
        Uri.parse('$apiBaseUrl/api/auth/apple-login'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'idToken': idToken,
          'nonce': rawNonce,
          'name': fullName,
        }),
      );

      if (response.statusCode != 200) {
        final errorData = jsonDecode(response.body);
        throw AuthException(
          errorData['message'] ?? 'Failed to sign in with Apple',
        );
      }

      final responseData = jsonDecode(response.body);

      // 設置 Supabase 會話
      if (responseData['session'] != null) {
        final session = responseData['session'];
        await supabase.auth.setSession(Session(
          accessToken: session['access_token'],
          refreshToken: session['refresh_token'],
          expiresAt: session['expires_at'] ?? 0,
        ));
      }

      // 刷新用戶會話
      return await supabase.auth.refreshSession();
    } catch (e) {
      debugPrint('Apple 登入錯誤: $e');
      rethrow;
    }
  }

  /// 登出用戶
  Future<void> signOut() async {
    await supabase.auth.signOut();
  }

  /// 生成隨機 nonce
  String _generateNonce([int length = 32]) {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._';
    final random = Random.secure();
    return List.generate(length, (_) => charset[random.nextInt(charset.length)]).join();
  }

  /// 使用 SHA-256 計算字符串的哈希值
  String _sha256OfString(String input) {
    final bytes = utf8.encode(input);
    final digest = sha256.convert(bytes);
    return digest.toString();
  }
}
```

## 使用登入按鈕

在你的登入頁面中添加 Apple 登入按鈕：

```dart
import 'package:flutter/material.dart';
import 'package:sign_in_with_apple/sign_in_with_apple.dart';

class LoginScreen extends StatelessWidget {
  final AuthService _authService = AuthService(
    apiBaseUrl: 'https://your-api-url.com',
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('登入')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Apple 登入按鈕
            SignInWithAppleButton(
              onPressed: () async {
                try {
                  final user = await _authService.signInWithApple();

                  if (user != null) {
                    // 登入成功，導航到主頁
                    Navigator.of(context).pushReplacementNamed('/home');
                  }
                } catch (e) {
                  // 處理錯誤
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('登入失敗: ${e.toString()}')),
                  );
                }
              },
              text: '使用 Apple 帳號登入',
              height: 44,
            ),

            // 其他登入選項...
          ],
        ),
      ),
    );
  }
}
```

## 處理用戶會話

在 Flutter 應用啟動時，檢查用戶會話狀態：

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '血壓記錄 App',
      home: FutureBuilder<void>(
        future: _checkSession(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Scaffold(body: Center(child: CircularProgressIndicator()));
          }

          // 根據用戶會話狀態決定顯示哪個頁面
          final isLoggedIn = Supabase.instance.client.auth.currentUser != null;
          return isLoggedIn ? HomeScreen() : LoginScreen();
        },
      ),
    );
  }

  Future<void> _checkSession() async {
    try {
      // 刷新 Supabase 會話
      await Supabase.instance.client.auth.refreshSession();
    } catch (e) {
      // 會話無效或過期，不需要處理
    }
  }
}
```

## 監聽認證狀態變化

在你的應用中添加認證狀態監聽器：

```dart
class AuthStateComponent extends StatefulWidget {
  final Widget child;

  const AuthStateComponent({Key? key, required this.child}) : super(key: key);

  @override
  _AuthStateComponentState createState() => _AuthStateComponentState();
}

class _AuthStateComponentState extends State<AuthStateComponent> {
  late final StreamSubscription<AuthState> _authSubscription;

  @override
  void initState() {
    super.initState();
    _authSubscription = Supabase.instance.client.auth.onAuthStateChange.listen((data) {
      final AuthChangeEvent event = data.event;

      // 處理認證事件
      switch (event) {
        case AuthChangeEvent.signedIn:
          // 用戶登入
          _handleSignedIn();
          break;
        case AuthChangeEvent.signedOut:
          // 用戶登出
          _handleSignedOut();
          break;
        default:
          break;
      }
    });
  }

  void _handleSignedIn() {
    // 用戶登入後的邏輯
    Navigator.of(context).pushReplacementNamed('/home');
  }

  void _handleSignedOut() {
    // 用戶登出後的邏輯
    Navigator.of(context).pushReplacementNamed('/login');
  }

  @override
  void dispose() {
    _authSubscription.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }
}
```

在 `main.dart` 中使用此組件：

```dart
@override
Widget build(BuildContext context) {
  return AuthStateComponent(
    child: MaterialApp(
      title: '血壓記錄 App',
      initialRoute: '/',
      routes: {
        '/': (context) => SplashScreen(),
        '/login': (context) => LoginScreen(),
        '/home': (context) => HomeScreen(),
      },
    ),
  );
}
```

## 遊客模式與登入彈窗

根據需求，我們需要支持遊客模式，並在用戶嘗試進行需要登入的操作時顯示登入彈窗：

```dart
/// 權限處理類
class PermissionHandler {
  /// 檢查操作權限並根據需要顯示登入彈窗
  static Future<bool> checkOperationPermission(
    BuildContext context,
    String operationType
  ) async {
    final authService = AuthService(apiBaseUrl: 'https://your-api-url.com');

    // 如果用戶已登入，直接返回 true
    if (authService.isUserLoggedIn()) {
      return true;
    }

    // 如果是遊客且需要登入，顯示登入彈窗
    return await _showLoginDialog(context) ?? false;
  }

  /// 顯示登入彈窗
  static Future<bool?> _showLoginDialog(BuildContext context) {
    return showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('需要登入'),
        content: Text('此功能需要登入才能使用。請登入您的帳戶以繼續。'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text('取消'),
          ),
          TextButton(
            onPressed: () {
              Navigator.of(context).pop(true);
              Navigator.of(context).pushNamed('/login');
            },
            child: Text('前往登入'),
          ),
        ],
      ),
    );
  }
}
```

在需要登入的操作前調用此方法：

```dart
// 例如在添加血壓記錄時
FloatingActionButton(
  onPressed: () async {
    final hasPermission = await PermissionHandler.checkOperationPermission(
      context,
      'add_record'
    );

    if (hasPermission) {
      // 繼續添加記錄的邏輯
      _addBloodPressureRecord();
    }
  },
  child: Icon(Icons.add),
),
```

## 總結

以上是在 Flutter 應用中實現 Apple 登入的完整流程，包括：

1. 項目配置和依賴設置
2. Supabase 集成
3. Apple 登入實現
4. 用戶會話管理
5. 認證狀態監聽
6. 遊客模式和登入彈窗

確保將示例中的佔位符（如 API URL、Supabase 認證信息等）替換為您自己的實際值。

## 故障排除

如果遇到 Apple 登入問題，請檢查：

1. Apple Developer 帳戶設置
2. Bundle ID 配置
3. 確保 Apple 登入功能已正確添加到 Xcode 項目中
4. 網絡連接問題
5. Supabase 配置是否正確
