function Login(){
    username = document.getElementById("user_input").value;
    localStorage.setItem("Username", username);
    window.location = "letsChat.html";
}