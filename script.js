let arr = ["ROCK","PAPER","SCISSORS"];
function run(value) {

  let i = Math.floor(Math.random() * 3);  
  console.log("BOT choice:"+arr[i]);

  if(value== "ROCK"){
    if(arr[i]=="PAPER"){ document.getElementById('result').innerHTML = "USER: "+value +"  "+" BOT: "+arr[i]+"  <br> BOT WIN";}
    else
      document.getElementById('result').innerHTML ="USER: "+value +"   "+" BOT: "+arr[i]+"   <br> USER WIN";
    
  }

  if(value== "PAPER"){

    if(arr[i]=="SCISSORS"){ 
      document.getElementById('result').innerHTML ="USER: "+value+" BOT: "+arr[i]+"<br> BOT WIN";}
    else
      document.getElementById('result').innerHTML ="USER: "+value+" BOT: "+arr[i]+"<br> USER WIN";
  }
  if(value== "SCISSORS"){
    if(arr[i]=="ROCK"){ 
      document.getElementById('result').innerHTML ="USER: "+value +" BOT: "+arr[i]+"<br> BOT WIN";}
    else
      document.getElementById('result').innerHTML ="USER: "+value +" BOT: "+arr[i]+"<br> USER WIN";
  }
  if(arr[i]==value){
      document.getElementById('result').innerHTML ="USER: "+arr[i]+" BOT: "+arr[i]+"<br> MATCH DRAW";
  }
 
  
}