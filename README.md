# LiveStudyRoom
<br/>About: Study Room in Your Home
<br/>Author: Issac To
<hr/>


## 1. 🎉 Inspiration

Are you a big fan of study group? I am sure a lot of you would miss revising efficiently at the study room. Forunately,LiveStudyRoom offers you the experience to study with people across the world together in a video meeting room with cameras opened. It is muted and works just like a study room where you would be pressurized by the environment and become disciplined. You could make a meeting room yourself or you could join others study room. All rooms at LiveStudyRoom are publicly open!


## 2. 📌 Structure


### A. 💎 Framework
* React
* Google Firebase (Oauth Github/Facebook/Google + Cloud Firestore)
* Express
* Node

### B. 🚀 Video Streaming Plugin
* Twillio

## 2.  📝 Implementation

1. Fill in your Google Firebase database uris inside the src/Components/Firebase/firebase.js file
``` javascript
const firebaseConfig = {
    apiKey: Yours,
    authDomain: Yours,
    projectId:Yours,
    databaseURL: Yours,
    storageBucket: Yours,
    messagingSenderId:Yours,
    appId: Yours,
    measurementId: Yours,
  };
```
2. Fill in your Twillio credentials inside the .env file

``` javascript

TWILIO_ACCOUNT_SID= Yours
TWILIO_API_KEY= Yours
TWILIO_API_SECRET= Yours

```

3. Install and run the program
```javascript 
npm install
npm run dev  
```

4. Go to http://localhost:3000

5. Enjoy!

## 4.  ⚠️ Problem
1. 

## 5.  ↗️ Reference
1. https://www.twilio.com/blog/video-chat-react-hooks (Huge Shoutout!)