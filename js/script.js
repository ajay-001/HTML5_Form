/**
 * @author Mysore
 */

$(function(){
	function getParameterByName(name)
	{
	  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regexS = "[\\?&]" + name + "=([^&#]*)";
	  var regex = new RegExp(regexS);
	  var results = regex.exec(window.location.search);
	  if(results == null)
	    return "";
	  else
	    return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	var text = getParameterByName("message");
	//if the text is not blank
	if (text != ""){
		$(".subHeader").before('<h2>' + text + '</h2>');
	}
});

  
