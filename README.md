# chatApp

**Learn about JavaScript Applications while building chatApp native mobile application**

---

##### Building Native Applications with JavaScript

---

## Objective

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

---

### Context

More and more people use their phones for daily tasks, such as shopping, creating to-do lists, communicating with friends, scheduling meetings, and more. That's why many companies offer native mobile versions of their web apps, or even skip creating a web app entirely.<br/>
In the past, building high-quality mobile apps required a lot of time and money because writing apps for different platforms like iOS and Android required specialized programmers who could build and maintain multiple codebases.<br/>
Over time, however, new technologies emerged that made it easier for companies to build and maintain mobile applications using familiar syntax. One of these technologies is React Native, a framework for building Android and iOS apps that only requires one codebase.<br/>
For this Achievement’s project, you’ll use React Native, Expo, and Google Firestore Database to build a chat app that you can add to your portfolio and demonstrate your knowledge of JavaScript mobile development.

---

# Features and Requirements

### User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.

- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.

- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.

- As a user, I want to be able to read my messages offline so I can reread conversations at any time.

- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

---

### Key Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.

- A page displaying the conversation, as well as an input field and submit button.

- The chat must provide users with two additional communication features: sending images and location data.

- Data gets stored online and offline.

---

### Technical Requirements

- The app must be written in React Native.

- The app must be developed using Expo.

- The app must be styled according to the given screen design.

- Chat conversations must be stored in Google Firestore Database.

- The app must authenticate users anonymously via Google Firebase authentication.

- Chat conversations must be stored locally.

- The app must let users pick and send images from the phone’s image library.

- The app must let users take pictures with the device’s camera app, and send them.

- The app must store images in Firebase Cloud Storage.

- The app must be able to read the user’s location data.

- Location data must be sent via the chat in a map view.

- The chat interface and functionality must be created using the Gifted Chat library.

- The app’s codebase must contain comments.

---

### Design Specifications

- Vertical and horizontal spacing: evenly distributed

- App title: font size 45, font weight 600, font color #FFFFFF

- “Your name”: font size 16, font weight 300, font color #757083, 50% opacity

- “Choose background color”: font size 16, font weight 300, font color #757083, 100% opacity

- Color options HEX codes: #090C08; #474056; #8A95A5; #B9C6AE

- Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083

---

# Setting Up a React Native Project

1. Before installing expo-cli, make sure you have the latest LTS Node version installed. <br/>
   run nvm install --lts or nvm install --lts/\* in the Terminal to check your Node version,<br/>
   then:<br/>
   run nvm ls-remote in the Terminal to check available versions (for installing choose "Latest LTS version" )

2. To istall the latest Node version,<br/>
   run nvm install 16.13.2 (type the LTS version number after install!) in the Terminal

3. To create new projects and start running Expo, you’ll need to install the Expo Command Line Interface (CLI) on your machine. To do so,<br/>
   run npm install expo-cli --global in the Terminal (make sure you install it globally!)

4. Next, you’ll need the Expo app for your phone to run your project on. Search for the Expo app in the relevant app store for your device (iOS or Android). The app icon should look something like this:<br/>
   Expo app icon<br/>
   Once you’ve found the Expo app, download it onto your device.

5. Head over to the Expo signup page and follow the instructions to create an account.

6. Go back to your terminal and navigate to the folder where all of your projects are stored.<br/>
   Create a new Expo project by entering:<br/>
   expo init hello-world<br/>

7. You’ll be asked which template you want to use for this project. Press Enter to choose the blank one

8. For Mac users, watchman is listed as a requirement in the Expo documentation section. If you do not have watchman installed, you can visit the Expo requirement and click on watchman for directions.

9. After the initialization is complete, go to your project’s directory using cd hello-world and start Expo with npm start or expo start.

10. Make sure that your phone and computer are on the same network (LAN or WiFi) and open up the Expo app on your phone. See if your new project is listed under “Recently in Development.” If your project isn’t listed, scan the QR Code provided in your browser (or your terminal) using the Expo Client app for Android or the built-in QR code scanner of your iPhone camera.

11. React Navigation is made by the community and not integrated into React Native, so first you need to install it. Open up your terminal and navigate to your new project folder, then type npm install --save react-navigation.<br/>
    Once done, run the following command to install the necessary dependencies that react-navigation uses:<br/>
    npm install @react-navigation/native @react-navigation/stack
    expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

12. In this project we will working with Gifted Chat<br/>
    Gifted Chat provides the entire interface, from the text input field, to the speech bubbles, to the “Send” button, meaning that all you need to do is feed it messages and take care of authentication and message storage.<br/>
    run npm install react-native-gifted-chat --save in the Terminal

13. Setting Up a Firestore Database: <br/>
    Head over to: https://firebase.google.com/ and click Sign in in the upper-right corner. Use your existing Google credentials to sign in and create a new Firebase account. Next, click on the Go to console link, which is also in the top-right corner of the window, and click on Create Project (or Add project if you’ve created Firebase projects before). Give your project a name and click Create Project. the Google Firebase dashboard will be predented, click Develop from the menu, select Cloud Firestore, then select Create Database. let’s go with the Start in test mode option! Next be asked to select the location of Cloud Firestore. For now, pick whichever option listed under the Multi-region label is closest to you, then click Done.

14. Click the Start collection button to launch the modal and type in the collection name. Start by adding a “Document ID.<br/>
    At any rate, with the document ID added, you can begin adding your attributes.<br/>
    Next comes the “items” field. Once everything has been added (and you’ve double-checked your work for errors!), save the new document to your new collection.

15. Setting up Firestore for a React Native Project<br/>
    run npm install --save firebase@7.9.0

16. Go ahead and open up your “App.js” file in your code editor and import Firestore:<br/>
    const firebase = require('firebase');<br/>
    require('firebase/firestore');

17. Back in the Firestore project in your browser, open up your “Project Settings”, <br/>
    under the General tab, you’ll find a section called Your apps, which is where you can generate configurations for different platforms. Click the Firestore for Web button (it may be shown as the </> icon).<br/>
    For now, only fill in a name for your chat application (e.g., “chat_web_app”), then click Register to generate the configuration code.

18. Copy the contents of the config object (from { apiKey:… to messagingSenderId:…}) in this modal. <br/>
    You’ll be integrating this configuration info into your “App.js” file. But before you can simply paste it into your file, you first need to create a constructor in your App class that will initialize the Firestore app. Within that constructor, you can paste the data you copied from the config object, leading to something that looks like this:<br/>

    const firebaseConfig = {<br/>
    apiKey: "AIzaSyCYhM7ZWoVZLLUD5xzpcepyID3B5w1sfuE",<br/>
    authDomain: "test-8b82a.firebaseapp.com",<br/>
    databaseURL: "https://test-8b82a.firebaseio.com",<br/>
    projectId: "test-8b82a",<br/>
    storageBucket: "test-8b82a.appspot.com",<br/>
    messagingSenderId: "202131758796"<br/>  
     }<br/>
    <br/>
    if (!firebase.apps.length){<br/>
    firebase.initializeApp(firebaseConfig);<br/>
    }

19. Next up, you’ll need to create a reference to your Firestore collection:<br/>
    For your chat application, you need to create a reference to your “messages” collection as follows:<br/>

    this.referenceChatMessages = firebase.firestore().collection("messages");<br/>
    This stores and retrieves the chat messages your users send. <br/>
    If you want to read and write to an individual document WITHIN a collection, this is also possible —for instance, if you wanted to store and query an email address for a specific user in your “users” collection.

20. To add and use Cookies in JavaScript: <br/>
    go to https://www.npmjs.com/package/cookies and follow the npm install instructions.

21. To add Local Storage Options in React Native with asyncStorage, another package called @react-native-async-storage/async-storage<br/>
    run expo install @react-native-async-storage/async-storage in the terminal to install it to the project directory<br/>
    afterwards run npx expo-codemod sdk41-async-storage './\*_/_' for the import the rignht dependencies

22. Knowing if a user is on- or offline can be useful in determining which actions to perform. If, for example, a user is offline, you can fetch and display their data from asyncStorage; and if a user is online, you could first load their data from local storage, then sync up with the data stored on your server. To find out if a user is online or not, you can use NetInfo package.<br/>
    install the package using expo-cli by running this command:<br/>
    expo install @react-native-community/netinfo

23. Finally add additional communication features, like the ability to share images and location data. <br/>
    To implement such capabilities, you first need to learn how to access users’ hardware components via their operating system’s APIs.<br/>
    To allow users of your chat app to select a photo from their library or take a new photo. To use the ImagePicker API and Permissions API, you first need to install:<br/>
    expo install expo-permissions<br/>
    expo install expo-image-picker<br/>

24. The last step is to import the Location API.<br/> You want to display the location data in a map (Google Maps on Android and Apple Maps on iOS), so you need to import the MapView component, as well.<br/>
    In order to import the mentioned APIs and tools, make sure to install:<br/>
    expo install expo-location<br/>
    expo install react-native-maps

---
