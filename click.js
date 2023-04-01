const words = ['Is this reconstruction an extraneous post-mortem revival ritual of preservation?',' Can there be care in data collection?', 'What death is regurgitated through the machine?', 'What does digital conservancy look like?']; 
let randomWords = [];

// randomize them
while (randomWords.length < words.length) {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomElement = words[randomIndex];
    if (!randomWords.includes(randomElement)) {
        randomWords.push(randomElement);
    }
  }

//make all the word containers
var select = document.getElementById("words");
var alreadyUsed = [];

//var cells = document.querySelectorAll('.cell');
    for(var i = 0; i < randomWords.length; i++) {
        // creating the place
        var current = document.createElement("div");
        current.appendChild(document.createTextNode(randomWords[i]));
        current.classList.add('words');
        select.appendChild(current);
    }

let clickIncrement = 0;

document.addEventListener('click', function(){
    var gifs = document.querySelectorAll('.gif');
    if (clickIncrement < gifs.length){
        gifs[clickIncrement].classList.add("show");
        clickIncrement ++;
    }else{
        for(let i = 0; i < gifs.length; i++){
            gifs[i].classList.remove("show");
            clickIncrement = 0;
        }
    }

});



// function handleClick() {
//     alert('The div was clicked!');
//   }

// function addToCells(){
//     var cells = document.querySelectorAll('.cell');
//     console.log(cells);
//     for (let i = 0; i < cells.length; i++){
//         var current = cells[i];
//         console.log(current);
//         current.addEventListener('click', handleClick);
//     }

// }


// window.addEventListener('load', addToCells());
// // this doesnt seem to be working -- look at it later?
// window.addEventListener('resize', addToCells());

