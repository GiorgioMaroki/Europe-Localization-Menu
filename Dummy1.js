	  //Author: Giorgio Maroki

	  //Main Function: Split the string of the URL
	  function getParameterByName(name, url) {
		//Retrieves website URL
		if (!url) url = window.location.href;
		//Replaces the 1st parameter with the 2nd parameter
		name = name.replace(/[\[\]]/g, "\\$&");
		//Takes all the regular expressions and results is the value we need
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
		//If empty or none are in there return Null
		if (!results) return null;
		//If the URL name doesn't have anything in index 2 return empty stress
		if (!results[2]) return '';
		//Return the value without the regular expressions.
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	  }
	  
	  //Main Function: Makes the dropdown menu SET on the language it gets selected to so it avoids refreshing it to the top of the list
	  function setToolbar(){
	  //Set variable to the splitted string (e.g. en_GB would be the value inside of the getParameterByName()
	  var localeVariable = getParameterByName('locale');
	  //ChangePage(localeVariable);
	  //alert(localeVariable);
	  //Make the drop down menu stay on the country selected
	  var tempLocale = localeVariable;
	  //Determine with for loop to go through each country with the countring variable j
	  for(var i, j = 0; i = locale.options[j]; j++){
	  //if value matches go in the if to make the value the selected index
		if(i.value == tempLocale){
			//set whatever j equaled to the selected index.
			locale.selectedIndex = j;
			break; //Break if value matches
			}
		}
		//Call so you can determine the flag
		determineFlag();
		
	}
	  
	  //Main Function: Assign each option to a flag
	  function determineFlag(){
	  //Assign the Value to the languageAbv
	  var languageAbv = document.getElementById("locale").value;
	  //Split the string so you can get rid of the underscore
	  languageAbv = languageAbv.split("_");
	  //Take only the last two variables of the variable languageAbv
	  var output = languageAbv[1].toLowerCase();
	  //Take the output variable and add .png to it (file name for all the flag images)
	  document.getElementById("flag").innerHTML = '<img src = "'+output+'.png" />';
	  }
	  
	  //Main Function: Change the page so not everything gets deleted in the url if something is added into the link
	  function ChangePage(url){
	  //Call function to switch flag as well
	  determineFlag();
	  //The localeVariable is for the last selected input so you can use this variable to delete it off the url when you switch it
	  var localeVariable = getParameterByName('locale');
	  //Get the updated variable to input inside the url when you switch the drop-down menu
	  var updatedVar = document.getElementById("locale").value;
	  //add a "locale=" string before the updated variable in the final variable string so you can replace the value to the new value
	  var finalVar = "locale=" + updatedVar;
	  
	  //Take the current href
	  var url = window.location.href;
	  
	  
	  //add a "locale=" string before the old variable in the locale variable string so you can indentify what part of the url needs to be replaced
	  var totalvar = "locale=" + localeVariable;
	  
	  
	  
	  //Look if locale is present with an if statement inside the url
	  if (!(url.indexOf("locale") > -1)){
		//Check if there is a "?" inside of the url
		if (url.indexOf('?') > -1){
		url = url + "&locale=" + updatedVar; 
		}
		//If there is NO "?" inside the url then add a "?"
		else{
		url = url + "?locale=" + updatedVar; 
		}
		
	  }
	  //If there is a Locale inside the url then replace it with the new value if user decides to switch language
	  else{
		//replaces the old value in the url to the new value
	    var url = url.replace(new RegExp(totalvar), finalVar); 
	  }
	  //Switches the url page after doing all the work above
	 window.location = url;
	  }
