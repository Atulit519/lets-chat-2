// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmLsApwYBeNz-fG0xSTGYnDvdx19JpsTI",
    authDomain: "lets-chat-52777.firebaseapp.com",
    projectId: "lets-chat-52777",
    storageBucket: "lets-chat-52777.appspot.com",
    messagingSenderId: "292906594152",
    appId: "1:292906594152:web:58164b1416733f25b670dd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

var username;
username = localStorage.getItem("Username");
document.getElementById("heading_span").innerHTML = username;