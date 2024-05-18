const container=document.getElementById('container');
console.log('parents',container.parentElement);
console.log('previous Sibling...',container.previousSibling);
console.log('next Sibling...',container.previousSibling);
console.log('children',container.children);

const body=document.getElementById('body');
console.log('lastChild',body.lastChild);
console.log('firstChild',body.firstChild);

//editing Dom element
const containerText = document.getElementById('container-text')
containerText.innerHTML = 'Am I really a child'

//creating DOM Element
const newHeading = document.createElement('h1')
container.appendChild(newHeading);
newHeading.innerHTML = 'Introduction'
newHeading.style.color = 'red'

const button = document.getElementById('button');
button.style.border = 'border';
button.style.background = 'blue';
button.style.padding = '10px 15px';
button.style.borderRadius = '5px';
button.style.cursor = "pointer";
button.style.color= 'white'

button.addEventListener('click',function(){
    button.innerHTML = 'Clicked';
    button.style.background = "green";
    button.style.color = "ffffff"
})





