window.onload = function(){

    const hamburguer = document.getElementById('hamburguer');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

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

};