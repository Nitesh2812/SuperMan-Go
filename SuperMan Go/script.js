
   score = 0;
   cross = true;
   
   audio = new Audio('music.mp3');
   audiogo = new Audio('gameover.mp3');

   setTimeout(() => {
       audio.play();
   }, 1000);
   
   document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    
    // move up 
    if (e.keyCode == 38) {
        bat = document.querySelector('.bat');
        bat.classList.add('animatedbat');
        setTimeout(() => {
            bat.classList.remove('animatedbat')
        }, 1500);
    }

    // move right
    if (e.keyCode == 39) {
        bat = document.querySelector('.bat');
        batX = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
        bat.style.left = batX + 150 + "px";
    }

    // move left 
    if (e.keyCode == 37) {
        bat = document.querySelector('.bat');
        batX = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
        bat.style.left = (batX - 150) + "px";
    }
}

setInterval(() => {
    bat = document.querySelector('.bat');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    bx = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(bat, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - ox);
    offsetY = Math.abs(by - oy);

    // console.log(offsetX,offsetY) 
    if (offsetX < 180 && offsetY < 280) {
        gameover.innerHTML = 'Game Over Re-Load To Start Again';
        obstacle.classList.remove('animatedObs');
        audiogo.play();
        setTimeout(() => {
           audiogo.pause();
           audio.pause();
        }, 1000);

    }
    else if ( offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = anidur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        }, 500);
        

    }

}, 10);

function updateScore(score) {
    scorecount.innerHTML = "Your score: " + score
}