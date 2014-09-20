
mustache= require 'mustache'

lista = ['lab' 
		42 
		true]

testo = "simpatia 
		portami


		 via"


oggetto=
	name: "simpatia"
	professione: 'deputato'
	eroe: [
		{ nome:'zuCiccio',
		qualifica:'contadino' }
		{ nome:'zaPippina',
		qualifica:'amministratrice delegata' }	]


do aggiungi =->
	$('#content').append oggetto.eroe[0].nome