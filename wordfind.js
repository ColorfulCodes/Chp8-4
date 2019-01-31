const fs = require('fs');
let readline = require('readline-sync')

//let sentence =fs.readFileSync('wf.txt', 'utf8')
//let readline = require('readline-sync');
let sentence = "One should never utilize the word 'utilize' in writing. Use 'use' instead."

function wordFinder(){
  let original = "";
  let replacement = "";
  let hold = 0

  while(sentence[hold] != "'"){
    hold+=1;
  }

  if (sentence[hold] === "'"){
    hold+=1
    while(sentence[hold] != "'"){
      original+=sentence[hold]
      hold+=1
  }

  }

  if (sentence[hold] === "'"){
    hold +=1
    while(sentence[hold] != "'"){
      hold+=1;
      }

    hold+=1
    while(sentence[hold] != "'"){
      replacement+=sentence[hold]
      hold+=1
      }
    };
  console.log(original)
  let t = sentence.replace(original, replacement);
  res = t.replace("'"+original+"'", replacement);
  console.log(res)

  let new_file = readline.question("Name your new file: ");

  fs.writeFile(new_file,res,(err)=> {
      if (err) throw err;

      console.log("File created successfully!");
    })
  }

wordFinder()
