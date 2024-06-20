//Script para dar un saludo al usuario una vez que inicie sesión. (Conectado con 'home.html')
document.addEventListener('DOMContentLoaded',function(){
    var loggedInUSer = JSON.parse(localStorage.getItem('loggedInUser'));
    if(loggedInUSer){
        document.getElementById("msgBienvenido").innerText = "!Hola, " + loggedInUSer.userList + "!";
    }else{
        window.location.href='html_in.html';
    }
});
function cerrarSesion(){
    localStorage.removeItem('loggedInUser');
    window.location.href = 'html_in.html'
}