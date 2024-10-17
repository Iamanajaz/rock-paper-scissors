let arr = ["ROCK","PAPER","SCISSORS"];
let  userp = 0;
let  botp = 0;


function run(value) {
  let i = Math.floor(Math.random() * 3);  
  console.log("BOT choice:"+arr[i]);

  if(value== "ROCK"){
  
    if(arr[i]=="PAPER"){ 
      botp=botp+5;
      document.getElementById('result').innerHTML = "USER: "+value +`<br> `+"  "+" BOT: "+arr[i]+`<hr>`+"BOT WIN";
    }
    if(arr[i]!="PAPER"  && arr[i]!= "ROCK"){
      document.getElementById('result').innerHTML ="USER: "+ value +` <br>  `+" BOT: "+arr[i]+`<hr>`+"USER WIN";
      userp=userp+5;
    }
  }

  if(value== "PAPER"){

    if(arr[i]=="SCISSORS"){ 
      botp=botp+5;
      document.getElementById('result').innerHTML ="USER: "+value+` <br>  `+" BOT: "+arr[i]+`<hr>`+"BOT WIN" 
    }
    if(arr[i]!="SCISSORS"  && arr[i]!= "PAPER"){
      document.getElementById('result').innerHTML ="USER: "+value+` <br>  `+" BOT: "+arr[i]+`<hr>`+" USER WIN";
      userp=userp+5;
    }
  }
  if(value== "SCISSORS"){
    if(arr[i]=="ROCK"){ 
      botp=botp+5;
      document.getElementById('result').innerHTML ="USER: "+value +` <br>  `+" BOT: "+arr[i]+`<hr>`+" BOT WIN";
    }
    if(arr[i]!="ROCK" && arr[i]!= "SCISSORS" )
    {
      userp=userp+5;
      document.getElementById('result').innerHTML ="USER: "+value+` <br>  ` +" BOT: "+arr[i]+`<hr>`+"USER WIN";
    }
    
  }
  if(arr[i]==value){
      document.getElementById('result').innerHTML ="USER: "+arr[i]+` <br>  `+" BOT : "+arr[i]+`<hr>`+"MATCH DRAW !!!";
  }







  document.getElementById('userpoint').innerHTML = "User points: "+userp;
  document.getElementById('botpoint').innerHTML = "Bot points: "+botp;
}

