// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}



// Function to READ MORE

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }


  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }


  function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }


  function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }


  function myFunction6() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "inline";
    }
  }

  //FORM VALIDATION//
  function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
   
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 14){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
