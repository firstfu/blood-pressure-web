/\*

- @ Author: firstfu
- @ Create Time: 2024-05-15 23:18:35
- @ Description: Firebase 配置說明文檔
  \*/

# Firebase 配置說明

本文檔提供了如何為血壓記錄應用配置 Firebase 的詳細步驟，包括設置 Firebase 專案、下載配置文件以及集成到應用程序中。

## 準備工作

1. 擁有 Google 帳戶
2. 擁有 Apple 開發者帳戶（如需 Apple 登入）
3. 安裝最新版本的 Flutter SDK 和 Dart
4. 安裝最新版本的 Firebase CLI（可選，用於自動化配置）

## 步驟一：創建 Firebase 專案

1. 訪問 [Firebase 控制台](https://console.firebase.google.com/)
2. 點擊「添加專案」(Add project)
3. 輸入專案名稱，例如「BloodPressureApp」
4. 選擇是否啟用 Google Analytics（建議啟用）
5. 按照提示完成專案創建

## 步驟二：註冊應用程序

### 註冊 iOS 應用程序

1. 在 Firebase 專案頁面，點擊「iOS」圖標以添加 iOS 應用
2. 輸入您的 Bundle ID（例如：com.yourcompany.bloodpressureapp）
   - 您可以在 Xcode 中找到它，或在 `ios/Runner.xcodeproj/project.pbxproj` 文件中查找
3. 輸入應用名稱（可選）
4. 輸入 App Store ID（可選）
5. 點擊「註冊應用」

### 註冊 Android 應用程序

1. 在 Firebase 專案頁面，點擊「Android」圖標以添加 Android 應用
2. 輸入您的 Package Name（例如：com.yourcompany.blood_pressure_app）
   - 您可以在 `android/app/build.gradle` 文件中的 `applicationId` 找到它
3. 輸入應用名稱（可選）
4. 輸入調試簽名證書 SHA-1（可選，但用於 Google 登入時必需）
   - 可以使用以下命令獲取：`cd android && ./gradlew signingReport`
5. 點擊「註冊應用」

## 步驟三：下載配置文件

### iOS 配置文件

1. 下載 `GoogleService-Info.plist` 文件
2. 使用 Xcode 將此文件添加到專案中
   - 打開 Xcode，右鍵點擊「Runner」，選擇「Add Files to "Runner"」
   - 選擇下載的 `GoogleService-Info.plist` 文件
   - 確保「Copy items if needed」選項已勾選，並選擇「Create groups」
   - 點擊「Add」

### Android 配置文件

1. 下載 `google-services.json` 文件
2. 將此文件放入 Android 應用模塊的根目錄中
   - 文件路徑應為 `android/app/google-services.json`

## 步驟四：更新 Firebase 配置

修改 `lib/firebase/firebase_options.dart` 文件，將下載的配置信息填入：

```dart
static const FirebaseOptions android = FirebaseOptions(
  apiKey: 'YOUR_ANDROID_API_KEY', // 從 google-services.json 中獲取
  appId: 'YOUR_ANDROID_APP_ID', // 從 google-services.json 中獲取
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // 從 google-services.json 中獲取
  projectId: 'YOUR_PROJECT_ID', // 從 google-services.json 中獲取
  storageBucket: 'YOUR_STORAGE_BUCKET', // 從 google-services.json 中獲取
);

static const FirebaseOptions ios = FirebaseOptions(
  apiKey: 'YOUR_IOS_API_KEY', // 從 GoogleService-Info.plist 中獲取
  appId: 'YOUR_IOS_APP_ID', // 從 GoogleService-Info.plist 中獲取
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // 從 GoogleService-Info.plist 中獲取
  projectId: 'YOUR_PROJECT_ID', // 從 GoogleService-Info.plist 中獲取
  storageBucket: 'YOUR_STORAGE_BUCKET', // 從 GoogleService-Info.plist 中獲取
  iosClientId: 'YOUR_IOS_CLIENT_ID', // 從 GoogleService-Info.plist 中獲取
  iosBundleId: 'YOUR_IOS_BUNDLE_ID', // 從 GoogleService-Info.plist 中獲取
);
```

## 步驟五：啟用身份驗證方法

1. 在 Firebase 控制台中，選擇「Authentication」
2. 點擊「Sign-in method」選項卡
3. 啟用以下身份驗證方法：
   - 電子郵件/密碼
   - Google
   - Apple（如需要）

### 配置 Google 登入

1. 確保已啟用 Google 作為身份驗證提供者
2. 無需額外配置，Firebase 已自動配置 Google 登入

### 配置 Apple 登入

1. 在 [Apple Developer Portal](https://developer.apple.com/) 中配置「Sign in with Apple」
2. 創建一個具有「Sign in with Apple」功能的 App ID
3. 創建一個 Service ID，用於 Apple 登入
4. 創建並下載一個私鑰 (.p8 文件)
5. 在 Firebase 控制台的「Authentication」→「Sign-in method」中配置 Apple 提供者
   - 提供您的 Apple Team ID
   - 提供 Service ID
   - 上傳 .p8 私鑰文件
   - 輸入私鑰 ID

## 步驟六：平台特定配置

### iOS 配置（Info.plist）

在 `ios/Runner/Info.plist` 文件中添加以下配置：

```xml
<!-- Google Sign-in Section -->
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>Editor</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<!-- 將 YOUR-REVERSED-CLIENT-ID 替換為 GoogleService-Info.plist 中的 REVERSED_CLIENT_ID -->
			<string>YOUR-REVERSED-CLIENT-ID</string>
		</array>
	</dict>
</array>
<!-- End of the Google Sign-in Section -->

<!-- Apple Sign-in Section -->
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <!-- 將 YOUR-SERVICE-ID 替換為您的 Apple Service ID -->
      <string>YOUR-SERVICE-ID</string>
    </array>
  </dict>
</array>
<!-- End of the Apple Sign-in Section -->
```

### Android 配置

1. 在 `android/app/build.gradle` 文件中添加 Google 服務插件：

```gradle
dependencies {
    // 其他依賴...
    implementation 'com.google.firebase:firebase-auth:20.0.0'
    implementation 'com.google.android.gms:play-services-auth:19.0.0'
}

apply plugin: 'com.google.gms.google-services'
```

2. 在 `android/build.gradle` 文件中添加 Google 服務插件：

```gradle
buildscript {
    repositories {
        // 其他倉庫...
        google()
        mavenCentral()
    }
    dependencies {
        // 其他依賴...
        classpath 'com.google.gms:google-services:4.3.10'
    }
}
```

3. 為 Apple 登入配置 AndroidManifest.xml：

```xml
<activity
  android:name="com.aboutyou.dart_packages.sign_in_with_apple.SignInWithAppleCallback"
  android:exported="true">
  <intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="signinwithapple" />
    <data android:path="callback" />
  </intent-filter>
</activity>
```

## 步驟七：測試配置

完成上述配置後，重新啟動應用並測試登入功能：

1. 電子郵件/密碼登入
2. Google 登入
3. Apple 登入（如適用）

## 常見問題解決

### Firebase 初始化失敗

檢查 `firebase_options.dart` 文件中的配置是否正確，確保所有必要的值都已填寫。

### Google 登入失敗

1. 檢查 Android 的 SHA-1 指紋是否正確添加到 Firebase 控制台
2. 確保 iOS 的 `GoogleService-Info.plist` 文件已正確添加
3. 檢查是否已在 Firebase 控制台啟用 Google 登入方法

### Apple 登入失敗

1. 確保 Apple Developer 帳戶配置正確
2. 檢查 Firebase 控制台中的 Apple 身份驗證提供者配置
3. 在 iOS 模擬器上測試前，請確保已登入 iCloud 帳戶
