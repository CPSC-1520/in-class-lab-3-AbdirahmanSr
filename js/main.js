// Enter your code below.

const resourcesButton = document.getElementById('show-resources');
const resDiv = document.querySelector('.javascript-resources');

resourcesButton.addEventListener('click', function() {
    
    resDiv.classList.remove('d-none');

});

resDiv.addEventListener('mouseover', function(event) {
    console.log(event.target);
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fw-bold');
    }

});

resDiv.addEventListener('mouseout', function(event) {
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
    }

});

resDiv.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fst-italic');
    }

});