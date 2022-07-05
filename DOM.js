const box = document.querySelector('#box');
const besar = document.querySelector('.besar');

box.addEventListener('click', function(e){
    if(e.target.className == 'sub'){
        besar.src = e.target.src;
    }
});