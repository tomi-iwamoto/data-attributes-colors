//When I click on the boxes, each box will show a text of the name of color of box


//Getting all elements with the class of box
let box = document.querySelectorAll('.box');
//Creating array from nodelist of "box"
let boxArray = Array.from('box');

let clearButton = document.getElementById('clear');

//Now that I have an array, I can cycle through this array using the forEach method
//For each element in the array of box, perform the following funciton:
box.forEach(function(target) {

    //whatever the target element is, I'm going to add an event listener
    //This event listener will display the text of each box 
    target.addEventListener('click', function() {

        target.innerHTML = target.dataset.text;

    })

})


clearButton.addEventListener('click', function(target) {

    //when I click the clear button it will erase the text inside of the box
    box.forEach(function(target) {

        target.innerHTML = ' ';
        
    })
    

})