const body = document.querySelector(".body");

const box = document.querySelectorAll('.box');

box.forEach(function(box){
    box.addEventListener('click',function(e){
        if(e.target.id === 'box1'){
            body.style.backgroundColor = "red";
        }
        else if(e.target.id === 'box2'){
            body.style.backgroundColor = "blue";
        }
        else if(e.target.id === 'box3'){
            body.style.backgroundColor = "green";
        }
        else if(e.target.id === 'box4'){
            body.style.backgroundColor = "yellow";
        }
    })
});

