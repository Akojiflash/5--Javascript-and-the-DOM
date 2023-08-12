const x = 'x';
const o = 'o'
let turn;
let plays = 0;
let win = false;
let xwin = 0;
let owin = 0;

const boxes = document.querySelectorAll('td');
const button = document.querySelector('button');
const xScore = document.querySelector('.x');
const oScore = document.querySelector('.o');
let checker;

function empty() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent == 'x' || boxes[i].textContent == 'o') {
            checker = false;
            break;

        } else if (boxes[i].textContent == '') {
            checker = true;
        }
    }
}
const winner = () => {

    //horizontal win x
    const row1 = boxes[0].innerHTML === x && boxes[1].innerHTML === x && boxes[2].innerHTML === x;
    const row2 = boxes[3].innerHTML === x && boxes[4].innerHTML === x && boxes[5].innerHTML === x;
    const row3 = boxes[6].innerHTML === x && boxes[7].innerHTML === x && boxes[8].innerHTML === x;

    //diagonal win x
    const daig1 = boxes[0].innerHTML === x && boxes[4].innerHTML === x && boxes[8].innerHTML === x;
    const diag2 = boxes[2].innerHTML === x && boxes[4].innerHTML === x && boxes[6].innerHTML === x;
    //vertical win x
    const col1 = boxes[0].innerHTML === x && boxes[3].innerHTML === x && boxes[6].innerHTML === x;
    const col2 = boxes[1].innerHTML === x && boxes[4].innerHTML === x && boxes[7].innerHTML === x;
    const col3 = boxes[2].innerHTML === x && boxes[5].innerHTML === x && boxes[8].innerHTML === x;

    // WINNER O
    //horizontal win o
    const orow1 = boxes[0].innerHTML === o && boxes[1].innerHTML === o && boxes[2].innerHTML === o;
    const orow2 = boxes[3].innerHTML === o && boxes[4].innerHTML === o && boxes[5].innerHTML === o;
    const orow3 = boxes[6].innerHTML === o && boxes[7].innerHTML === o && boxes[8].innerHTML === o;

    //diagonal win o
    const odaig1 = boxes[0].innerHTML === o && boxes[4].innerHTML === o && boxes[8].innerHTML === o;
    const odiag2 = boxes[2].innerHTML === o && boxes[4].innerHTML === o && boxes[6].innerHTML === o;
    //vertical win o
    const ocol1 = boxes[0].innerHTML === o && boxes[3].innerHTML === o && boxes[6].innerHTML === o;
    const ocol2 = boxes[1].innerHTML === o && boxes[4].innerHTML === o && boxes[7].innerHTML === o;
    const ocol3 = boxes[2].innerHTML === o && boxes[5].innerHTML === o && boxes[8].innerHTML === o;

    if (row1 || row2 || row3 || daig1 || diag2 || col1 || col2 || col3) {
        xwin += 1;
        xScore.innerHTML = 'X: ' + xwin;
        

        alert('X WINS !!!');
        win = true;
        restart()
        return true;

    } else if (orow1 || orow2 || orow3 || odaig1 || odiag2 || ocol1 || ocol2 || ocol3) {
        owin += 1;
        oScore.innerHTML = 'O: ' + owin;
        alert('O WINS !!!')
        win = true;
        restart()
        return true;

    } else if (plays === 9 && win === false) {
        restart();
        alert('NO WINNER');
       
    }
}
    ;

function play() {
    empty();
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            winner();
            restart();
            if (boxes[i].innerHTML === '' && checker === true ) {
                boxes[i].innerHTML = x;
                turn = x;
                checker = false;
                plays += 1;
                winner();
                restart();
      
            } else if (turn === x && boxes[i].innerHTML === '' && checker === false) {
                boxes[i].innerHTML = o;
                turn = o;
                checker = false;
                plays += 1;
                winner();
                restart();
           
            } else if (turn === o && boxes[i].innerHTML === '' && checker === false) {
                boxes[i].innerHTML = x;
                turn = x;
                checker = false;
                plays += 1;
                winner();
                restart();
        
            }
        });

        if (winner() || win === true) {
            win = false;
            restart();
            continue;
        }
    }

}


const restart = () => {
    if (win === true) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = '';
            turn = '';
            plays = 0;
            checker = true;
            win =false;
            empty();
        }

    }

    button.addEventListener('click', () => {
       
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = '';
            turn = '';
            plays = 0;
            checker = true;
            xwin = 0;
            owin = 0;
        }
        oScore.innerHTML = 'O: ' + owin;
        xScore.innerHTML = 'X: ' + xwin;
    })

}
play();
empty();