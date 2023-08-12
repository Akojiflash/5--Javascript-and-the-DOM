const toggleList = document.querySelector('#toggleList');
const listDiv = document.getElementsByClassName('list')[0];
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


toggleList.addEventListener('click', ()=>{
        if (listDiv.style.display === 'none'){
                toggleList.innerHTML = 'Hide list';
                listDiv.style.display = "block";
        }else{
                toggleList.innerHTML = 'Show list';
                listDiv.style.display = "none";
        }
});
 
descriptionButton.addEventListener('click', ( )=>{
        descriptionP.textContent = descriptionInput.value + ':';
        descriptionInput.value = '';
});  

addItemButton.addEventListener('click', () => {
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = addItemInput.value;
        ul.appendChild(li);
        addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
        let ul = document.querySelector('ul');
        let li = document.querySelector('li:last-child');
        ul.removeChild(li);
        
});