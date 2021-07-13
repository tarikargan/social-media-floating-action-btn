var slc = (el) =>{return document.querySelector(el);}

var btnToggle = slc('.toggle-btn');
var bee = slc('.bee');

btnToggle.addEventListener('click',()=>{
    slc('.social-media').classList.toggle('open');
})
