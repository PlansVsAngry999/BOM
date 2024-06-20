//  Página web 17/06/2024
/*  Elaborado por:
        Yuhani Hernández Garcia       (Dolor de riñon)
        Edgar Alan Santiago Silos (xxTentacionSigmatoilet)
        Tabatha Valeria Rivero Rodriguez (Sayo)
        Ricardo Daniel Hernández Sosa (PlansVsAngry999)*/
document.addEventListener("DOMContentLoaded",function(){
    /****************************************************Productos***********************************************/
    const datosProductos =[
        {nombre:"Colorburgers" ,        imagen:"proImg/pcom_colorburgers.png" , origen:"Bob esponja" , precio:0 , descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
    /****************************************************Comestibles***********************************************/
    const datosPComestibles =[
        {nombre:"Colorburgers" ,        imagen:"proImg/pcom_colorburgers.png" , origen:"Bob esponja" , precio:0 , descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Grasitos" ,            imagen:"proImg/pcom_grasitos.png" ,     origen:"!Carly" ,      precio:0 , descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Fruta del diablo" ,    imagen:"proImg/pcom_frutaDiablo.png" ,  origen:"One piece" ,   precio:0 , descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Tubbiepapilla" ,       imagen:"proImg/pcom_tubbiepapilla.png" ,origen:"Teletubbies" , precio:0 , descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
    /****************************************************Armamento***********************************************/
    const datosPArmamento =[
        {nombre:"Pokebola" ,            imagen:"proImg/parm_bola.png" ,         origen:"Pokemon" ,           precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Chipote Chillon" ,     imagen:"proImg/parm_chipote.png" ,      origen:"Chapulin colorado" , precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Escanor" ,             imagen:"proImg/parm_escanor.png" ,      origen:"???" ,               precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"King" ,                imagen:"proImg/parm_king.png" ,         origen:"???" ,               precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Pistola de portales" , imagen:"proImg/parm_pistola.png" ,      origen:"Rick & Morty" ,      precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
    /****************************************************Vestimenta***********************************************/
    const datosPVestimenta =[
        {nombre:"Corona Rey Helado" ,   imagen:"proImg/pves_coronaHelada.png" ,  origen:"Hora de aventura" , precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
    /****************************************************Vivivientes***********************************************/
    const datosPVivientes =[
        {nombre:"BMO" ,                 imagen:"proImg/pviv_BMO.png" ,          origen:"BMO" ,         precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Caracol telefonico" ,  imagen:"proImg/pviv_caracol.png" ,      origen:"One piece" ,   precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"???" ,                 imagen:"proImg/pviv_golf.png" ,         origen:"Gravity Falls",precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"???" ,                 imagen:"proImg/pviv_wara.png" ,         origen:"???" ,         precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
    /****************************************************Objetos***********************************************/
    const datosPObjetos =[
        {nombre:"Maquina temporal" ,    imagen:"proImg/pobj_carrito.png" ,      origen:"Volver al futuro" , precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"???" ,                 imagen:"proImg/pobj_coraline.png" ,     origen:"Coraline" ,         precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Flor Wither" ,         imagen:"proImg/pobj_florWither.png" ,   origen:"Minecraft" ,        precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Guitarra vampirezca" , imagen:"proImg/pobj_guitarraV.png" ,    origen:"Hora de aventura" , precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Pain bot" ,            imagen:"proImg/pobj_painBot.png" ,      origen:"Cyande&Happiness" , precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {nombre:"Robot pizza" ,         imagen:"proImg/pobj_robotPizza.png" ,   origen:"Teen Titans Go" ,   precio:0 ,   descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        
    ];
});
