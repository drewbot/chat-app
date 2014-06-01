$('.login').click(function(){
	$('.login-form').show( 200, function() {
    });
    $( ".login" ).hide( "fast" );
})

//Store username
$('.login-form').submit(function(event){
	username = $('.login-type').val();
	$('.username').text('Hello, ' + username);
	$('.username').show( 1000, function() {
    });
	if ( $('.login-type').val() == "" ) {
		event.preventDefault();
		alert('You must enter a username to continue')
	} else if ( $('.login-type').val() == " " ) {
		event.preventDefault();
		alert('You must enter a username to continue')
	} else {
    	$('.message-gateway').show( 1000, function() {
    	});
    	$( ".login-form" ).hide( "fast" );
  	}
  	event.preventDefault();
});


//Login functionality
// function doIt() {
//   $( "span,div" ).show( "slow" );
// }
// // Can pass in function name
// $( "button" ).click( doIt );
 
// $( "form" ).submit(function( event ) {
//   if ( $( "input" ).val() === "yes" ) {
//     $( "p" ).show( 4000, function() {
//       $( this ).text( "Ok, DONE! (now showing)" );
//     });
//   }
//   $( "span,div" ).hide( "fast" );
 
//   // Prevent form submission
//   event.preventDefault();
// });




//Add and remove input values

$('.login-type').focusin(function(){
	$(this).attr('value', "");
});

$('.login-type').focusout(function(){
	if ($(this).attr('value') == ""){
		$(this).attr('value', " type your username")
	};
});

$('.message-type').focusin(function(){
	$(this).attr('value', "");
});

$('.message-type').focusout(function(){
	if ($(this).attr('value') == ""){
		$(this).attr('value', " type new message")
	};
});

//Messages Template
var showMessages = _.template($('.messages').text());

//Fetch repo
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
	data = data.splice(0,50);
	renderMessages(data);
});

//Display messages
function renderMessages (array) {	
	array.forEach(function(info){
	  if (info.user && info.message && info.time) {
	  	var rendered = showMessages( info ); 
	  	$('.message-area').append(rendered);
	  } 
	});
};

//Post a new message constructor
function Post (newMessage, username) {
	var x = new Date();
	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', {
		user: username, 
		message: newMessage, 
		time: x.toString(), 
		meta: "", 
		appID: "drewbot"})
};

//Post a new message instance on click
$('.post').click(function(){
	var message = $('.message-type').val();
	freshPost = new Post(message, username);
});


// {
// user:"", 
// message:"", 
// time: epoch, 
// meta:"", 
// appID: static tag for identification
// }


