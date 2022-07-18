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

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = ""
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key
                  Room_names = childKey
                  //Start code
                  document.getElementById("output").innerHTML += "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</div><hr>"
                  //End code
          })
    })
}
getData()

function logout() {
      localStorage.removeItem("un")
      localStorage.removeItem("rn")
      window.location = "index.html"
}

gi = localStorage.getItem("un")
document.getElementById("wt").innerHTML = "Welcome " + gi + "!"

function addRoom() {
      rn = document.getElementById("rn").value
      localStorage.setItem("rn", rn)
      firebase.database().ref("/").child(rn).update({
            purpose: "Adding room name"
      })
      window.location = "letschat_page.html"
}

function redirect(name) {
      localStorage.setItem("rn", name)
      window.location = "letschat_page.html"
}