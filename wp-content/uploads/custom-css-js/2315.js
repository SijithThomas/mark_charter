/******* Do not edit this file *******
Simple Custom CSS and JS - by Silkypress.com
Saved: Jan 15 2022 | 04:00:50 */
/* Default comment here */ 
const modalPopup=document.querySelector('.modal-popup');
const shopOnline=document.querySelector('.shop-online');
const modalBtn=document.querySelectorAll('.modal-btn');

shopOnline.addEventListener('click',()=>{
  modalPopup.style.display="block";
});
shopOnline.style.backgroundColor="breen";
modalBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    modalPopup.style.display="none";
  })
})
shopOnline.style.color="green";