// Simple interactivity: mobile nav toggle and booking form handler
document.addEventListener('DOMContentLoaded',function(){
const btn=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');
if(btn && nav){
btn.addEventListener('click',()=>{
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.style.flexDirection = 'column';
});
}


const form=document.getElementById('booking-form');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
const data = new FormData(form);
const name = data.get('name');
const phone = data.get('phone');
const issue = data.get('issue');
// For portfolio/demo we just open WhatsApp with prefilled message
const text = encodeURIComponent(`Hello, my name is ${name}. I need help with ${issue}. Phone: ${phone}`);
window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
});
}
});