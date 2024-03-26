## 紀錄 習慣

- React Native
- Spring boot
- MongoDB noSql
- Docker → DB + Redis+ Nginx(load balancer)
- 上雲
- 上架google store

---

## 功能

```html
npx create-expo-app healthPlan

cd healthPlan
npx expo start
```

Expo

```html
npm install --global eas-cli && \
npx create-expo-app healtplan && \
cd healtplan && \
eas init --id a8c0170d-1840-4eec-8e7e-6159204c4011
```

install

```html
 npm install @react-navigation/native
npm install @react-navigation/stack
npm install -- save @react-navigation/bottom-tabs
npm install @expo/vector-icons
npm install react-native-pie-chart --save // 圖餅表
npm install react-native-svg
npx expo install react-native@0.71.14
npm install react-native-heatmap-chart --force
npm install react-native-elements
react-native-web@~0.18.10, @expo/webpack-config@^18.0.1
npm install react-native-tab-view
npm install react-native-pager-view
npm i react-native-calendars@1.1286.0
npm install @react-navigation/stack
npm i react-native-calendars@1.1286
npm install react-native-paper
npm install i18next react-i18next
npm install i18next-browser-languagedetector
npm install i18next i18next-react-native-language-detector react-native-locale-detector --save
npm install intl-pluralrules
npm install i18next-http-backend
npm install axios
```

update

```java
npm update
npm cache clean --force
npm install expo@49 --force // 更新sdk版本
```

## ESLint

[How to set up ESLint in VS Code for React Native applications that use TypeScript](https://medium.com/@josiahmahachi/how-to-set-up-eslint-in-vs-code-for-react-native-applications-that-use-typescript-7a103f264d6d)

## Ajax

[JavaScript Promise 全介紹](https://www.casper.tw/development/2020/02/16/all-new-promise/)

## Api串接

[](https://ithelp.ithome.com.tw/articles/10253259)

[Axios (in React-native) not calling server in localhost](https://stackoverflow.com/questions/42189301/axios-in-react-native-not-calling-server-in-localhost)

## Docker

[用 Docker 玩 Mongo - HackMD](https://hackmd.io/@SuFrank/BJOe3Fi3c)

[GitHub - twtrubiks/docker-tutorial: Docker 基本教學 - 從無到有 Docker-Beginners-Guide   教你用 Docker 建立 Django + PostgreSQL 📝](https://github.com/twtrubiks/docker-tutorial?tab=readme-ov-file)

```java
docker pull mongo
docker run --name MONGO_DB -v D:\mongoDB:/data/db -d -p 27017:27017 --rm mongo
mongodb://localhost:27017/
```

## Redis

[How to use Redis with Spring boot to store sessions and why 🍀](https://www.youtube.com/watch?v=4K5N7SRcyK8&ab_channel=Hamza)

## **Convert React Expo Project into React Native Project**

[How to Convert React Expo Project into React Native Project -4 | Dr Vipin Classes](https://www.youtube.com/watch?v=HQlE2aWLEAg&t=109s&ab_channel=DrVipinClasses)

```java
npx expo prebuild
npx react-native run-android
```

[No metro config found](https://www.reddit.com/r/reactjs/comments/15a6aar/no_metro_config_found/)

![plot](./image/螢幕擷取畫面 2024-03-26 130024.png)  

```java
npx expo customize metro.config.js
```

```java
adb devices // 確認是否透過usb連線裝置
npm install react-native-unimodules// 套件允許您在 React Native 專案中使用各種 Expo SDKs 功能，而不需要將專案完全轉移到 Expo 中。
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/91838b8e-0f2c-42a9-b41a-5bc73724cb1c/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/b54ae4a0-057e-434c-af12-9eb4366c97a0/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/8ff8aea3-0941-4908-bf2a-58f2ad09bf97/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/333632c5-8dcf-4103-9176-c49be6f5e565/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/5c38d6e3-c4e6-4f82-a3db-1cb61641afc3/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/9e0913b0-0750-47e4-b479-fe4554ea6c78/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/c510980a-6e99-4b49-aa0b-73ccbe0ae5b0/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/e315618d-7f12-476e-ba01-548db255591a/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/3318de64-ffe3-4085-9c52-546f86052017/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/3f871d64-45f5-4ba7-84e6-adb8bfa2af62/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/23dee74c-0bbc-49bd-8514-c92a5628c190/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/e5c679fe-2bd9-4cc3-a5e4-d0fa7cf109ba/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/bd5cc5f2-b1cc-4664-ab98-65d9ced2b060/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/81bfe8e8-c2fe-4d29-8949-0ba3cf293f0f/29ede750-6dd8-4144-a793-d0af5f4d903d/Untitled.png)
