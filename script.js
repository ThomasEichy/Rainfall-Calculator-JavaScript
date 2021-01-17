let i = 1;
let stringHolder = "";
let years = parseInt(prompt("Please enter the amount of years, you'd like to track."));
let months = years * 12;
let y = 1;

while ( y < years + 1) {
  stringHolder += "<br><br>" + "Year " + y;
  let d = 1;

  while ( d < 12 + 1) 
  {
    htmlString = "<br><br><li>Please enter the amount of rainfall for month " + d + "</li>" +
    "<br> <input id='rainfall" + i + "' type='number'>";

    stringHolder += htmlString;

    i++;
    d++;
  }
  y++;
}

document.getElementById("question").innerHTML = stringHolder;

function result(){
  let q = 1;
  let sum = 0;

  let monthArray = [];
  while ( q < months + 1) {
    sum += parseInt(document.getElementById("rainfall" + q).value);
    
    monthArray.push(parseInt(document.getElementById("rainfall" + q).value));

    q++;
  }
  
  let avg = sum / months;

  document.getElementById("answer").innerHTML = "The sum is: " + sum + "<br>" + " The average is: " + avg +
   "<br>" + " The total months are: " + months;
}