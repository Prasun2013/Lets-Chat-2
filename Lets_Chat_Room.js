var firebaseConfig = {
    apiKey: "AIzaSyB7yG5w1jP71b7C52EtOLDHlrCw-hj3zss",
    authDomain: "lets-chat-54be3.firebaseapp.com",
    databaseURL: "https://lets-chat-54be3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-54be3",
    storageBucket: "lets-chat-54be3.appspot.com",
    messagingSenderId: "43742845706",
    appId: "1:43742845706:web:6d14ef0dd2ea457e97f8f3",
    measurementId: "G-3FNTGW56Q0"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "WELCOME"+user_name+"!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row; 
   });
});
}
getData();

function redirectToRoomName(name)
{
      console.log("name");
      localStorage.setItem("room_name" , name);
      window.location = "Lets_Chat_Page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      window.location = "index.html";
}