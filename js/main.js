// Enter your code below.

const showResourcesButton = document.getElementById('show-resources');
const resourcesDiv = document.querySelector('.javascript-resources');
const resourcesButton = document.getElementById('show-resources');
const resDiv = document.querySelector('.javascript-resources');

showResourcesButton.addEventListener('click', function() {
    resourcesDiv.classList.remove('d-none');
resourcesButton.addEventListener('click', function() {
    resDiv.classList.remove('d-none');
});

resourcesDiv.addEventListener('mouseover', function(event) {
resDiv.addEventListener('mouseover', function(event) {
    console.log(event.target);
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fw-bold');
    }
});

resourcesDiv.addEventListener('mouseout', function(event) {
resDiv.addEventListener('mouseout', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
    }
});

resourcesDiv.addEventListener('click', function(event) {
resDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fst-italic');
    }
});