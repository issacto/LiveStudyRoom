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

### B. 🚀 Video Plugin
* Twillio

## 2.  📝 Implementation

1. Fill in your mongodb database uri inside the config/key.js file
``` javascript
module.exports = {
    mongoURI: YourMongodbLink,
    useUnifiedTopology: true ,
    secretOrKey: "secret"
};
```
2. Fill in your Twillio credentials inside expertAi.py.

``` javascript

os.environ["EAI_USERNAME"] = Your_Experai_Username
os.environ["EAI_PASSWORD"] = Your_Experai_Password

```

3. Install and run the program
```javascript 
npm install
npm run dev  
```

4. Go to http://localhost:3000






## 4.  ⚠️ Problem
1. Due to the limitations of Mongodb free tier scheme, tubasite doesn't allow clients to edit, comment and like their comments. 
2. Due to the limitations of Heroku free tier deployment scheme, it may take several seconds to load the heroku website

## 5.  ↗️ Reference
1. https://www.twilio.com/blog/video-chat-react-hooks (Huge Shoutout!)