var btn = document.getElementById('btn');
var mainDiv= document.getElementById('mainDiv');
var txt=document.getElementById('txt');


btn.addEventListener('click' , (e) =>{
   e.preventDefault(); 
   var username=mainDiv.username.value;
   var password=mainDiv.password.value;

   if(username === "user" && password === "hi")
   {
       alert('successful');
   }
   else{
       //alert('not successful');
       txt.style.visibility='visible';
   }
})
