const myList = document.getElementsByTagName('li');

for (let i in myList){ 
    myList[i].style.color = 'purple';
    myList[3].style.color = "orange";
}

