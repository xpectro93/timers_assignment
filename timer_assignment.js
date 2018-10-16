//Erick Arellano
//Jonathan Andrade


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("What do you think of node.js? ", function(answer) {
//   // TODO: Log the answer in a database
//   console.log("Thank you for your valuable feedback:", answer);
//
//   rl.close();
// });

rl.question(`Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice.`, function(answer) {
  console.log(`You chose ${answer} \n Hmmmmm.......`);

  let arr = ["r", "p", "s"]
  let aword = "";
  let cword = "";
  let compAnswer = arr[Math.floor(arr.length * Math.random())];
// if ( answer === "r"){
//   aword="rock";
// }
// if (answer === "p"){
//   aword = "paper";
// }
// if (answer || answer === "s"){
//   aword = "scissors";
// }



if ( compAnswer === "r"){
  cword="rock";
}
if (compAnswer === "p"){
  cword = "paper";
}
if (compAnswer === "s"){
  cword = "scissors";
}

if(answer === "r" && compAnswer === "s"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n YoU WoN!!!!1`)
  },5000)
  rl.close()
}else if(answer === "p" && compAnswer === "r"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n YoU WoN!!!!1`)
  },5000)
  rl.close()
}else if(answer === "s" && compAnswer === "p"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n YoU WoN!!!!1`)
  },5000)
  rl.close()
}else if(answer === "r" && compAnswer === "p"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n Get better!!`)
  },5000)
  rl.close()
}else if(answer === "p" && compAnswer === "s"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n Get better!!`)
  },5000)
  rl.close()
}else if(answer === "s" && compAnswer === "r"){
  setTimeout(() =>{
    console.log(`Computer chose ${cword} \n Get better!!`)
  },5000)
  rl.close()
}else{
  setTimeout(() =>{
    console.log(`Computer chose ${compAnswer} \n It's a draw`)
  },5000)
  rl.close()
}



});
