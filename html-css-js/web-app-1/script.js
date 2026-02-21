function asritha(){
  // lblmessage.innerHTML=(document.getElementById("txtemail").value)
   //lblexecutes.innerHTML=(document.getElementById("txtpassword").value)
   let email=document.getElementById("txtemail").value
   let pass=document.getElementById("txtpassword").value
   if(email==="john@gmail.com" && pass=="asru"){
    lblmessage.innerHTML="welcome"
   }
   else{
    lblmessage.innerHTML="access denied";
    lblmessage.style.color="red";
   }

}
function showloginform(){
    
}