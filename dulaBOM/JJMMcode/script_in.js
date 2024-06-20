//Script para ejecutar el inicio de sesión. (Conectado con index.html)
/****************************************************Usuarios-claves***********************************************/
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
        //Lista de integrantes y sus datos
    var userJS = document.getElementById('userID').value;
    var pwdJS = document.getElementById('pwdID').value;
    var userList = [
        {nombre: "Nombre",          apellido: "Apellido",           correo: "Correo",               userList:'username',     pwdList:"0000", tel:"telefono", edad:100 },
        {nombre: "Yuhani",          apellido: "Hernandez Garcia",   correo: "yuhani@goes.com",      userList:'DolorDeRinon', pwdList:"1111", tel:"911", edad:16 },
        {nombre: "Tabatha Valeria", apellido: "Rivero Rodriguez",   correo: "tab@goes.com",         userList:'Sayo',         pwdList:"2222", tel:"911", edad:17 },
        {nombre: "Edgar Alan",      apellido: "Santiago Silos",     correo: "edgar@goes.com",       userList:'EdgarXXX',     pwdList:"3333", tel:"911", edad:19 },
        {nombre: "Ricardo Daniel",  apellido: "Hernández Sosa",     correo: "plvsan999@gmail.com",  userList:'PvA999',       pwdList:"4444", tel:"911", edad:18 }
    ];
        //Buscar en la lista.
    var validUser = userList.find(searcher => searcher.userList === userJS && searcher.pwdList === pwdJS);
        //Validar Usuario-Contraseña
    if(validUser){
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));
        window.location.href = 'home.html'
    }else{
        document.getElementById('msgError').innerText = "Nombre de usuario o contraseña incorrectos.*"
    }
});
/**************************************Script para 'home.html'***********************************************/
