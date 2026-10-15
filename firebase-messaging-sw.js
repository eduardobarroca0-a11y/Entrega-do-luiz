importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBk8hJ6V7_yDp8C_In-ddXn6uETLQdF8Pg",
  authDomain: "entrega-do-luiz.firebaseapp.com",
  databaseURL: "https://entrega-do-luiz-default-rtdb.firebaseio.com",
  projectId: "entrega-do-luiz",
  messagingSenderId: "838114642177",
  appId: "1:838114642177:web:fed4404da01683070f7300"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Entrega do Luiz';
  const options = {
    body: payload.notification?.body || 'Nova entrega disponível!',
    icon: './icon-192.png',
    data: {
      url: './Entrega-do-Luiz-V8-teste.html'
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./Entrega-do-Luiz-V8-teste.html')
  );
});
