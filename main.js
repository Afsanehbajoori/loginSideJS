var btn = document.getElementById('btn');
var mainDiv= document.getElementById('mainDiv');
var txt=document.getElementById('txt');
var uname=document.getElementById('username');
var pass=document.getElementById('password');
var errorTxt=document.getElementById('errorTxt');
var form = document.getElementsByTagName('form');
var errorPass=document.getElementById('errorPass');
var radioValid= document.getElementsByClassName('radioValid');


btn.addEventListener('click' , (e) =>{
   e.preventDefault(); 
   var username=mainDiv.username.value;
   var password=mainDiv.password.value;
  

   if(username === "user1" && password === "user1")
   {
       alert('successful');
       window.open('http://google.com');
   }
   if(!(radioValid[0].checked || radioValid[1].checked)){
       alert('check one');
   }
   else{
       //alert('not successful');
       txt.style.visibility='visible';
   }
})

//validation of input username:
uname.addEventListener('input' , (e) =>{
    if(uname.validity.valid)
    {
        errorTxt.textContent='';
        uname.style.backgroundColor='white';
        
    }else{
        uname.style.backgroundColor='red';
        showErrorUname();
        e.preventDefault();
    }
})

pass.addEventListener('input' , (e) =>{
    if(pass.validity.valid)
    {
        errorPass.textContent='';
        pass.style.backgroundColor='white';
        
    }else{
        pass.style.backgroundColor='red';
        showErrorPass();
        e.preventDefault();
    }
})

function showErrorUname(){
    if(uname.validity.valueMissing){
        errorTxt.textContent='Enter username';
        
    }else if(uname.validity.typeMismatch){
        errorTxt.textContent='Enter '
    }else if(uname.validity.tooShort){
        errorTxt.textContent='too short';
    }

}

function showErrorPass(){
    if(pass.validity.valueMissing){
        errorPass.textContent='Enter username';
        
    }else if(pass.validity.typeMismatch){
        errorPass.textContent='Enter';
    }else if(pass.validity.tooShort){
        errorPass.textContent='too short';
    }

}

//validation of form after submit:
form.addEventListener('submit' , (e) =>{
    if(!uname.validity.valid && !pass.validity.valid)
    {
        showErrorUname();
        showErrorPass();

    }
})
