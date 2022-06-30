const openButton = document.querySelector("#openOverlay")

openButton.addEventListener("click", e=>{
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    overlay.addEventListener("click", e=>{
        if(e.target===overlay){
            close.click();
        }
    })

    const container = document.createElement("div");
    container.classList.add("mod__container");

    const content=document.createElement("div");
    content.classList.add("content");

    content.innerHTML="hello world!"

    const close=document.createElement("a");
    close.classList.add("close");
    close.textContent="X";

    close.href="#";

    close.addEventListener("click", e=>{
        e.preventDefault();
        document.body.removeChild(overlay);
    })



    overlay.appendChild(container);
    container.appendChild(close);
    container.appendChild(content);
    document.body.appendChild(overlay);
})