const firebaseConfig = {
    apiKey: "AIzaSyAW_Cs9RKfNIOXJRqSVPg9eaELwjNBjWzg",
    authDomain: "chat-box-8e28f.firebaseapp.com",
    databaseURL: "https://chat-box-8e28f-default-rtdb.firebaseio.com",
    projectId: "chat-box-8e28f",
    storageBucket: "chat-box-8e28f.appspot.com",
    messagingSenderId: "384680267247",
    appId: "1:384680267247:web:fca9089eed83ee63d8ba1a"
  };

  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
