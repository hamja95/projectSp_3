function buy() {
    alert("Added to cart.");
}

let loginpage = document.querySelector(".loginvisible");
let mainpage = document.querySelector(".mainpagevis");
let contactpage = document.querySelector(".contactvisible");
let registerpage= document.querySelector(".registervisible");
function login() {
    loginpage.style.display = "block";
    mainpage.style.display = "none";
    contactpage.style.display = "none";
    registerpage.style.display = "none";
   
    

}


function home() {
    loginpage.style.display = "none";
    mainpage.style.display = "block";
    contactpage.style.display = "none";
    registerpage.style.display = "none";
    
}

function contact(){
    contactpage.style.display = "flex";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    registerpage.style.display = "none";

}
function register(){
    registerpage.style.display = "flex";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    contactpage.style.display = "none";
    

}


