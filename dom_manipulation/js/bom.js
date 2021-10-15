const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const main = document.querySelector('main')

button.addEventListener('click', function() 
{
    let textInput = input.value;
  
      
      const item = document.createElement('li');
      const list_button = document.createElement('button');
      item.textContent = textInput;
      list_button.textContent = '❌';
      item.appendChild(list_button);
      list.appendChild(item);
      list_button.addEventListener('click', function() 
      {
        list.removeChild(item);
      })
    
    input.focus();
    input.value = "";
 
  })