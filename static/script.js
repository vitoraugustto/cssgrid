window.onload = function(){

    setTimeout(function(){
        document.body.classList.remove('preload');
    }, 550);


    const navDesktop = document.getElementById('desktop');
    const navMobile = document.getElementById('mobile');
    const hamburguer = document.getElementById('hamburguer');
    const boxes = document.getElementById('wrapper-boxes');
    const lis = document.getElementsByTagName('li');
    const liWrapper = document.getElementById('li-wrapper');


    var isOpen = 0;
    hamburguer.addEventListener('click', function() {
        isOpen += 1;

        if (isOpen == 1) {
            navDesktop.style.left = '0';
            navMobile.style.top = '0';

            if (window.innerWidth <= 425) {
                hamburguer.style.top = '419px';
            };

            liWrapper.classList.add('fadeIn');
            liWrapper.classList.remove('fadeOut');

        } else {
            navDesktop.style.left = '-200px'
            navMobile.style.top = '-402px'

            liWrapper.classList.add('fadeOut');

            if (window.innerWidth <= 425) {
                hamburguer.style.top = '15px';
            };

            isOpen = 0;
        };

        if (window.innerWidth > 425) {
            hamburguer.classList.remove('rotate');
            setTimeout(function() {
                hamburguer.classList.add('rotate');
            }, 1);
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
    
        if (innerWidth <= 425) {
            function createBoxes(className) {
                for (var i = 0; i < 6; i++) {
                    const box = document.createElement('div');

                    box.className = className;
                    boxes.appendChild(box);
                };
            }; 
            createBoxes('box');
        } else {
             function createBoxes(className) {
                for (var i = 0; i < 16; i++) {
                    const box = document.createElement('div');
                    
                    box.className = className;
                    boxes.appendChild(box);
                };
            }; 
            createBoxes('box');
        };

    

};
