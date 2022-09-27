let modal = document.getElementById('contact-modal'),
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function() {
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})
function payment(){
let address=document.getElementById("address");
let name=document.getElementById("name");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
var contact=document.getElementById("contact");
let emptyVar="";

if(name.value==emptyVar){
    alert("Fill Name");
 }
else{
    if(lname.value==emptyVar){
        alert("Fill last name");
    }else{
        if(email.value==emptyVar){
            alert("Fill email");
        }
        else{
              if(address.value==emptyVar){
                alert("Fill address");
            }
            else{
                if(contact.value.length!=10){
                    alert("Fill number correctly");
                }
                else{
                    alert("Taking you to the payment gateway");
                    open("payment.html");
                }
            }
        }
    }

    }
    }
    
