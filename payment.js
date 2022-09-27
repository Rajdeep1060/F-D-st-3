
function payment(){
    let name=document.getElementById("name");
    let card=document.getElementById("card");
    let date=document.getElementById("date");
    let cvc=document.getElementById("cvc");
    var flag=true;
   if(name.value==""){
       alert("Fill Name");
       flag=false;
   }
       if(card.value.length!=19){
           alert("Fill card number correctly \n Otherwise It will not accept the payment");
           flag=false;
       }
       if(date.value.length==0){
        alert("Fill Date");
        flag=false;
       }
       if(cvc.value.length!=3){
        alert("Enter cvc correctly");
        flag=false;
       }
       if(flag){
        alert("Payment is successful.\nRedirecting You to main page");
        open('index.html');
       }
   }
