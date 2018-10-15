let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theArray) {
  let buildMeUp = " ";
  for (let i = 0; i < sentence.length; i++) {
    if (i % 3 === 0 && i!== 0 ) {
      buildMeUp += " " + sentence[i] + "!";
    } else {
      buildMeUp += " " + sentence[i];
    }
    console.log(buildMeUp);
  }
};

// addExcitement(sentence);

function addExcitement(theArray, punctuation) {
  let buildMeUp = " ";
  for (let i = 0; i < sentence.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      buildMeUp += " " + sentence[i] + punctuation;
    } else {
      buildMeUp += " " + sentence[i];
    }
    console.log(buildMeUp);
  }
};

// addExcitement(sentence, "?");


let excited = (theArray, punctuation) => {
    let buildMeUp = " ";
    for (let i = 0; i < sentence.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        buildMeUp += " " + sentence[i] + punctuation;
      } else {
        buildMeUp += " " + sentence[i];
      }
      console.log(buildMeUp);
    }
  };

 excited(sentence, "?");
