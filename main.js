var btn = document.getElementById('btn');
var mainDiv= document.getElementById('mainDiv');
var txt=document.getElementById('txt');
localStorage.setItem('usename' , 'user1');
localStorage.setItem('password' ,'user1');


btn.addEventListener('click' , (e) =>{
   e.preventDefault(); 
   var username=mainDiv.username.value;
   var password=mainDiv.password.value;
   const udata=localStorage.getItem('username');
   const pdata=localStorage.getItem('password');

   if(username === "user1" && password === "user1")
   {
       alert('successful');
   }
   else{
       //alert('not successful');
       txt.style.visibility='visible';
   }
})
