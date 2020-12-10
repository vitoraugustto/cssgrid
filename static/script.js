window.onload = function(){

    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    const hamburguer = document.getElementById('hamburguer');
    const boxes = document.getElementById('wrapper-boxes');
    const lis = document.getElementsByTagName('li');


    var hamburguerState = 0
    hamburguer.addEventListener('click', function(){
        hamburguerState += 1;
        
        if(hamburguerState == 1){
            nav.style.display = 'inline-block';
            header.style.gridColumn = '2 / span 3';
            main.style.gridColumn = '2  / span 3';
            footer.style.gridColumn = '1 / span 4';

        } else {
            nav.style.display = 'none';
            header.style.gridColumn = '1 / span 3';
            main.style.gridColumn = '1  / span 3';
            footer.style.gridColumn = '1 / span 3';

            hamburguerState = 0;
        };
    });

    arrayLis = [...lis];

    arrayLis.forEach((li) =>
        li.addEventListener('mouseenter', function() {
            li.classList.add('contrastIn');
            li.classList.remove('contrastOut');
        }));

    arrayLis.forEach((li) => 
        li.addEventListener('mouseout', function() {
            li.classList.remove('contrastIn');
            li.classList.add('contrastOut');
        }));


    function createBoxes(className) {
        for ( var i = 0; i < 16; i++ ) {
            const box = document.createElement('div');
            //box.classList.add('box');

            box.className = className;
            boxes.appendChild(box);
        };
    }; 

    createBoxes('box');

};