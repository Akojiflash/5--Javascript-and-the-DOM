const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById('myButton');
const myButton2 = document.getElementById("myButton2");

const parag = document.getElementById('para');

myHeading.addEventListener('click', () => {

    myHeading.style.color = "orange";
});

parag.addEventListener('click', () => {
    parag.style.backgroundColor = "orange";
});


myButton.addEventListener('click', ()=>{

    parag.style.backgroundColor = "Pink";
})

myButton2.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;

});


