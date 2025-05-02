var container = document.querySelector('#container');
var button = document.querySelector('button');
var input = document.querySelector('#text');



button.addEventListener('click', (e) =>{
    var listHead = document.createElement("h1");
    container.append(listHead);
    listHead.innerText = input.value;
   
    


    // //for delete button
    var buttonText = document.createElement('button');
    listHead.append(buttonText);
    buttonText.innerText = "DELETE";


    buttonText.addEventListener('click', (e) =>{
        listHead.remove();   
    })


    if(input.value === ""){
        e.preventDefault();
        alert("input text");
    } 

  
})





// EVENT PROPAGATION

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e.target.innertext = "clicked")
// }, true)




// CHATGPT CODE

var container = document.querySelector('#container');
var button = document.querySelector('button');
var input = document.querySelector('#text');

button.addEventListener('click', (e) => {
    // check if input is empty first
    if(input.value === ""){
        alert("Please enter some text!");
        return; // stop the function if empty
    }

    // create the heading
    var listHead = document.createElement("h1");
    container.append(listHead);
    listHead.innerText = input.value;

    // create the delete button
    var buttonText = document.createElement('button');
    listHead.append(buttonText);
    buttonText.innerText = "DELETE";

    buttonText.addEventListener('click', () => {
        listHead.remove();
    }); 

    // optional: clear input after adding
    input.value = "";
});








const header = document.querySelector('h1');

header.addEventListener('click', (e) => {

    const target = e.target
    if(target.matches('p')){
        target.style.backgroundColor = "white";
        target.style.color = 'black';
    }
})



// const headerOne = document.querySelector('.heading');

// headerOne.addEventListener('click', (e) => {

//     const target = e.target
//     if(target.tagName === 'p'){
//         target.style.backgroundColor = "white";
//     }
// })
