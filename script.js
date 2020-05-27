
var generateBtn = document.querySelector("#generate");
var showPass = document.getElementById("password");
var valuesLow = arrayFromLowToHigh(97, 122);
var valuesUp = arrayFromLowToHigh(65, 90);
var valuesNum = arrayFromLowToHigh(48, 57);
var valuesSpec = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

var passLength = prompt("Choose a length for your password between 8 and 128 character. Numeric characters only, please.");
  console.log(passLength)
var passType = prompt('Choose one or mote of the following criteria for your password (lowercase will be included by default): "uppercase", "numeric", "special characters". Please type your selection(s) and separate them using comas.');
  console.log(passType)

  

  var passLength = parseInt(passLength);
    console.log(passLength);

// cite https://www.youtube.com/watch?v=iKo9pDKKHnc for reference

//cite https://www.youtube.com/watch?v=9sT03jEwcaw for reference 

generateBtn.addEventListener("click", function(event) {
  event.preventDefault()
  generatePassword = writePassword(passLength, valuesLow, valuesNum, valuesUp, valuesSpec)
  showPass.innerText = generatePassword
})


function writePassword(passLength, valuesLow, valuesNum, valuesUp, valuesSpec) {
  let charCodes = valuesLow;
  passType = passType.split(",", "");
  return passType

  //array, string, split

  if (passType === "uppercase") charCodes = charCodes.concat(valuesUp);
  if (passType === "numeric") charCodes = charCodes.concat(valuesNum);
  if (passType === "special characters") charCodes = charCodes.concat(valuesSpec);

  var generatePassword = []
  for (let i = 0; i < passLength; i++) {
    var characters = charCodes[Math.floor(Math.random() * charCodes.length)];
    generatePassword.push(String.fromCharCode(characters));
  }
  return generatePassword.join('');
}

// function split() {
//   var passType = passType.split(',', '');
//   split();
// }


function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

