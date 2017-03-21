	function translate(){
	var title = document.getElementById("form-signin-heading");
	var email= document. getElementById("inputEmail");
	var password= document.getElementById("inputPassword");
	var remember= document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];
	title.innerHTML ="Por favor inicia sesión";
	email.placeholder ="Correo Electrónico";
	password.placeholder="Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión"



	}
	translate();

function mostrar(){
	var titulo=document.getElementById("subti");
	var contenedor=document.getElementById("datos");
	var infor2=document.getElementById("informacion1");
	var infor =document.getElementById("informacion");
	var email= document. getElementById("inputEmail").value;
	var password= document.getElementById("inputPassword").value;
	titulo.innerHTML="Datos de formulario";
	infor.innerHTML="El correo electrónico ingresado es :"+"<br>"+ email;
	infor2.innerHTML="La clave ingresada es :"+"<br>"+ password;
}