window.onload = function(){

    setTimeout(function(){
        document.body.className = '';
    }, 550);


    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    const hamburguer = document.getElementById('hamburguer');
    const boxes = document.getElementById('wrapper-boxes');
    const lis = document.getElementsByTagName('li');

    const liWrapper = document.getElementById('li-wrapper');


    var isOpen = 0;
    hamburguer.addEventListener('click', function(){
        isOpen += 1;

        if (isOpen == 1) {
            nav.style.left = '0'
            liWrapper.classList.add('fadeIn');
            liWrapper.classList.remove('fadeOut');

        } else {
            nav.style.left = '-200px'
            liWrapper.classList.add('fadeOut');

            isOpen = 0;
        }


        hamburguer.classList.remove('rotate');
        setTimeout( function() {
            hamburguer.classList.add('rotate');
        }, 1)
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