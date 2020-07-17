var getName = function() {
    var days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
}
  var name = document.getElementById("name")
   var male = document.getElementById("male")
   var female = document.getElementById("female")
  var date0fbirth = new Date(year + "/" + month + "/" + day);
    var results = date0fbirth.getDay();
    var output = document.getElementById("output");
    
    
    if (month =="" && year =="" && day =="" && name=="") {
      alert("Please Enter you credentials");
      return false;
    }
    if (year < 0) {
      alert.style.background ="red"
      alert.style.color= "black"
      alert.innerHTML =  "Hello" + name + " please enter a valid year " + "to proceed!"
  }
    
  else if ((month < 1) || (month > 31)) {
      output.style.background ="red"
      output.style.color= "black"
      output.innerHTML = "Hello " + name + " please enter a valid month! " + "to proceed!"
  }
    
   else if (day < 0 || day > 31) {
      output.style.background ="red"
      output.style.color= "black"
      output.innerHTML = "Hello " + name + " please enter a valid day! " + "to proceed!"
  }
  if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="lime"
        output.innerHTML = "Bonjour" + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
    }
     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="lime"
      output.style.background ="red"
      output.innerHTML = "Bonjour" + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
  }
  
  };



    





              
            
            
            

 
// var gender=female
// var aknanName=["Sunday: Akosua","Monday: Adwoa","Tuesday: Abenaa","Wednesday: Akua","Thursday:Yaa",
//                "Friday: Afua","Saturday: Ama" ]
//     function(aknanName);
// female=true
// if(female){
//     (a.getDay(aknanName));
// }