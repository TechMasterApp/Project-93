function joinUs() {
    un = document.getElementById("un").value
    localStorage.setItem("un", un)

    window.location = "letschat_room.html"
}