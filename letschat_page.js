var firebaseConfig = {
      apiKey: "AIzaSyBIkfzfeT3G3uAp9ILNBuW3xgXojv981aQ",
      authDomain: "project-94-433ac.firebaseapp.com",
      databaseURL: "https://project-94-433ac-default-rtdb.firebaseio.com",
      projectId: "project-94-433ac",
      storageBucket: "project-94-433ac.appspot.com",
      messagingSenderId: "724449631593",
      appId: "1:724449631593:web:78fc832b87189eed41f1f8",
      measurementId: "G-964L56M4RD"
}

firebase.initializeApp(firebaseConfig)
var un = localStorage.getItem("un")
var rn = localStorage.getItem("rn")

var clicked = 0

function getData() { 
    firebase.database().ref("/" + rn).on('value', function(snapshot) { 
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
                childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      su = message_data["name"]
                      sm = message_data["message"]
                      sl = message_data["likes"]
                      msgDiv = "<div>" + su + ":" + sm + "</div>"
                      lkBut = "<button class='btn btn_likes' id=" + firebase_message_id + " value=" + sl + " onclick='increaseLikes(this.id)'><span class='glyphicon glyphicon-thumbs-up'> Likes:" + sl + "</span></button>"
                      document.getElementById("output").innerHTML += msgDiv + lkBut + "<hr>"
                      //End code
                } 
          })
    })
}
getData();

function logout() {
    localStorage.removeItem("un")
    localStorage.removeItem("rn")
    window.location = "index.html"
}

function sendMessage() {
    msg = document.getElementById("msg").value
    firebase.database().ref(rn).push({
          name: un,
          message: msg,
          likes: 0
    })
    document.getElementById("msg").value = ""
}

function increaseLikes(msgID) {
    if (clicked == 0) {
          ul = document.getElementById(msgID).value
          ul = Number(ul) + 1
          firebase.database().ref(rn).child(msgID).update({
                likes: ul
          })
          document.getElementById(msgID).style.backgroundColor = "green"
          clicked = 1
    } else if (clicked == 1) {
          ul = document.getElementById(msgID).value
          ul = Number(ul) - 1
          firebase.database().ref(rn).child(msgID).update({
                likes: ul
          })
          document.getElementById(msgID).style.backgroundColor = "gray"
          clicked = 0
    }

}