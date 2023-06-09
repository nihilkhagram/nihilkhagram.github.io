importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
   apiKey: "AIzaSyAurLSFPNBGghG9Zd3qZJ8WYW2HlM7M-S4",
     authDomain: "james-club.firebaseapp.com",
     databaseURL: "https://james-club-default-rtdb.firebaseio.com",
     projectId: "james-club",
     storageBucket: "james-club.appspot.com",
     messagingSenderId: "74096079460",
     appId: "1:74096079460:web:e5e14abedfe64a1de6a571",
     measurementId: "G-B2R556HLF6"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((payload) => {
  console.log("onBackgroundMessage", payload);
  console.log('Received background message ', payload);

      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
      };

      self.registration.showNotification(notificationTitle,
        notificationOptions);
});