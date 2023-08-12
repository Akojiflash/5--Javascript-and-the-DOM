

const errorNotPurple = document.getElementsByClassName('error-not-purple');
const myList = document.getElementsByTagName('li');

for (let i in myList){ 
    myList[i].style.color = 'purple';
  
    continue;
    
    
}


for (let j = 0; j < errorNotPurple.length ; j++){

    errorNotPurple[j].style.color = 'red';
    continue;
}
