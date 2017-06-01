/*
Exercice GitHub
Apparition img
Envoi sur le cloud
Juin 2017*/

var tableauImage=["chat.jpg","chat_pomme.jpg","pomme.jpg"];

var nombre=1;

$('#bouton').click(function(){

	$('img').attr('src', tableauImage[nombre%3]);
	nombre++;

});

