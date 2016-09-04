/*This is a comment*/

function askQuestions() {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var userAge = prompt ('How old are you?');
	userAge = parseInt(userAge)

	if (userAge >= 18) {
		console.log ('User is an adult.');
	} else if (userAge >= 13) {
			console.log ('User is a teenager.');
	} else {
		console.log ('User is a child');
	}

	/*
	If the user's first name is "General" and their last name is NOT 
	"Assembly", then greet General!   
	 De som skal få er General - med etternavn ikke Assembly  */ 

	 if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
	 		console.log('Hello ' + lastName + '!');  
		 } 

}

//When the page has loded 
$(function(){ 

	//When the user click img

	$('img').on('click', askQuestions); 


	//hide all the content 

	// When the user clicks an h3 
	$('h3').on('click', function() {

		// Hide the next element 
		$(this).next().slideToggle(20);

	}); 

}); 