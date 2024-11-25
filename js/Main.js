const Search = document.querySelector(".icon");
const Input = document.querySelector(".input");
const Right = document.querySelector(".Marg")

Search.addEventListener('click',()=>{
    if(!Input.classList.contains('input-open')){
        Input.classList.add('input-open');
        Search.innerHTML = "<i class='fas fa-times-circle'></i>";
        Search.style.color='Black';
        Right.style.marginRight="0px"
    }
    else{
        Right.style.marginRight="25px"
        Search.style.color='White';
        Input.classList.remove('input-open');
        Search.innerHTML = "<i class='fas fa-search'></i>"
    }
})
