

let burger = document.querySelector(".fa-bars");
let menu = document.querySelector(".navbar");
burger.onclick = ()=>{
    menu.classList.toggle("show");
};
let members = 28;
let i = 0;
let counting_members = setInterval(()=>{
    document.getElementById("count").innerHTML = i;
    i++;
    if(i == members){
        clearInterval(counting_members);
    }
}, 100 );
