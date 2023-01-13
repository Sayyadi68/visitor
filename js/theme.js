        var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

//check storage if dark mode was on or off

if (sessionStorage.getItem("mode") == "light") {
  nodark();//if dark mode was on, run this funtion
} 
else {
  darkmode();  //else run this funtion
}


//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    nodark(); //if the checkbox is checked, run this funtion
  } else {
    darkmode(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.documentElement.setAttribute('data','dark'); //add a class to the body tag
  checkbox.checked = false; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.documentElement.setAttribute('data','light'); //remove added class from body tag
  checkbox.checked = true; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
