const toggleList = document.querySelector('#toggleList');
const listDiv = document.getElementsByClassName('list')[0];
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', ()=>{
        if (listDiv.style.display === 'none'){
                toggleList.innerHTML = 'Hide list';
                listDiv.style.display = "block";
        }else{
                toggleList.innerHTML = 'Show list';
                listDiv.style.display = "none";
        }
        
  

});

button.addEventListener('click', ()=>{
        p.textContent = input.value + ':';
      
       

});  


// listDiv.style.color = 'red';