/**
 * @author Mysore
 */

$(function(){
	
	/*multiple columns*/
	$("form#contactForm").columnize({columns:2});
	
	/*remove 'key' and tell the user how to fill out the form*/
	$("#key").hide();
	$("form").before(
		"<strong>Required Fields: First Name, Concern Name, Mobile(at least 10 digits without spaces), Office Phone(at least 10 digits without spaces), Email(please format properly), Primary Address City</strong>"
	);	
});

  
