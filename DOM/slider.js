const lBtn = document.querySelector("#left");
const rBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const current = getComputedStyle(items);

rBtn.addEventListener("click",e=>{
    e.preventDefault();
    let currentRight = parseInt(current.right);

    if(currentRight<500){
        items.style.right=`${currentRight + 100}px`
    }
});

lBtn.addEventListener("click",e=>{
    e.preventDefault();
    let currentRight = parseInt(current.right);
    if(currentRight>0){
        items.style.right=`${currentRight - 100}px`
    }
});