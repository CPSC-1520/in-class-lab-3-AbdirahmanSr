// Enter your code below.

//show the recourses div when button is clicked
const resourcesButton = document.getElementById('show-resources');
const resDiv = document.querySelector('.javascript-resources');

resourcesButton.addEventListener('click', function() {
   
    resDiv.classList.remove('d-none');

});

//add bold font when mouse hovers over list items
resDiv.addEventListener('mouseover', function(event) {
    console.log(event.target);
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fw-bold');
    }

});

//remove the font weight when we dont hover anymore
resDiv.addEventListener('mouseout', function(event) {
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
    }

});

//add the font style when list item is clicked
resDiv.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fst-italic');
    }

});