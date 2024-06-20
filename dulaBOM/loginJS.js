//  Página web 17/06/2024
/*  Elaborado por:
        Yuhani Hernández Garcia       (Dolor de riñon)
        Edgar Alan Santiago Silos (xxTentacionSigmatoilet)
        Tabatha Valeria Rivero Rodriguez (Sayo)
        Ricardo Daniel Hernández Sosa (PlansVsAngry999)*/

/****************************************************Usuarios-claves***********************************************/
    document.getElementById('loginForm').addEventListener('submit', function(event){
        var userJS = document.getElementById('userID').value;
        var pwdJS = document.getElementById('pwdID').value;
        var userList = [
            {nombre: "Nombre",          apellido: "Apellido",           correo: "Correo",               userJS:'username',     pwdJS:"contrasena", tel:"telefono", edad:100 },
            {nombre: "Yuhani",          apellido: "Hernandez Garcia",   correo: "yuhani@goes.com",      userJS:'DolorDeRinon', pwdJS:"1111", tel:"911", edad:16 },
            {nombre: "Tabatha Valeria", apellido: "Rivero Rodriguez",   correo: "tab@goes.com",         userJS:'Sayo',         pwdJS:"2222", tel:"911", edad:17 },
            {nombre: "Edgar Alan",      apellido: "Santiago Silos",     correo: "edgar@goes.com",       userJS:'EdgarXXX',     pwdJS:"333",  tel:"911", edad:19 },
            {nombre: "Ricardo Daniel",  apellido: "Hernández Sosa",     correo: "plvsan999@gmail.com",  userJS:'PvA999',       pwdJS:"4444", tel:"911", edad:18 }
        ];
        //Buscar en la lista.
        var validUser = userList.find(searcher => searcher.userJS === userJS && searcher.pwdJS === pwdJS);
        //Validar Usuario-Contraseña
        if(validUser){
            localStorage.setItem('loggedInUser', JSON.stringify(validUser));
            window.location.href = 'JJMM/home.html';
        }else{
            document.getElementById('mensajeError').innerText = "Nombre de usuario o contraseña incorrectos."
        }
    });
/****************************************************Validar Usuario-contraseña***********************************************/
    document.getElementById("Usuario").addEventListener("submit", function(event){
        event.preventDefault();
            //Restaurar los mensajes.
        document.getElementById("mensaje1").textContent = null;
        document.getElementById("mensaje2").textContent = null;
            //Declarar variables
        var userJS = document.getElementById("userID").value;
        var pwdJS = document.getElementById("pwdID").value;
            
        if(userJS === "abc" && pwdJS === "123"){    //Si el usuario y contraseña son correctos -->
                //Almacenar informacion en el navegador
            localStorage.setItem("userJS_name",userJS);
            alert("Has iniciado sesión con exito");
                //Abrir una ventana nueva
            window.location.href="loginSuccess.html";
        }else if(userJS != "abc" && pwdJS != "123"){//Si el usuario y contraseña son incorrectos -->
            document.getElementById("mensaje1").textContent = "El usuario es incorrecto*";
            document.getElementById("mensaje2").textContent = "La contraseña es incorrecta*";
        }else if(userJS != "abc"){                //Si el usuario es incorrecto -->
            document.getElementById("mensaje1").textContent = "El usuario es incorrecto*";
        }else if(pwdJS != "123"){                 //Si la contraseña es incorrecto -->
            document.getElementById("mensaje2").textContent = "La contraseña es incorrecta*";
        }

    });

    document.getElementById("Usuario").addEventListener("reset", function(event){
        event.preventDefault();
        document.getElementById("userID").value = null;
        document.getElementById("pwdID").value = null;

        document.getElementById("mensaje1").textContent = null;
        document.getElementById("mensaje2").textContent = null;
    });