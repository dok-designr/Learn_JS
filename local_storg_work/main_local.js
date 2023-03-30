

let lis = document.querySelectorAll('ul li');
let exp = document.querySelector('.experiment');

if (window.localStorage.getItem("color")) {
    // ADD COLOR IN CLASS
    exp.style.backgroundColor = window.localStorage.getItem("color");

    // remove acti class from all lis
    lis.forEach((li) => {
        li.classList.remove("active")
    });
    
} else {
        // add active class to current color
        document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")
    }

// window.localStorage.clear()

lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.color)
        
        // remove acti class from all lis
        lis.forEach((li) => {
            li.classList.remove("active")
        });
        
        // add active class to current elemnt
        e.currentTarget.classList.add("active");
        
        // add current color to local storg
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        
        // change div background color
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});   