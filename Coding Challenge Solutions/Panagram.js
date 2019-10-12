var panagram = "We promptly judged antique ivory buckles for the prize";

var regex = /^[+\-a-z(). ]+$/gi;

if(panagram.match(regex)){
  console.log("PANAGRAM")
}else{
  console.log("NO")
}