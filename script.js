
function gethistory(){

	return document.getElementById("history-value").innerText;
}
function printhistory(num){
	return document.getElementById("history-value").innerText=num;
}
printhistory("8*9*9");
function getoutput(){

return document.getElementById("output-value").innerText;

}

function printoutput(num2){
if (num2=="")
{

	document.getElementById("output-value").innerText=num2;
}
else
{
 document.getElementById("output-value").innerText=getformattedno(num2);
}


}

function getformattedno(num){
	if(num=="-")
	{
		return "";
	}
var n=Number(num);
var val=n.toLocaleString("en");
return val;


}

printoutput("45923");


function reverseno(num){

	return Number(num.replace(/,/g,''));
}



let operator= document.getElementsByClassName("operator");

for(var i=0;i<operator.length; i++)
{

operator[i].addEventListener('click',function() {

if(this.id=="clear")
{
printhistory("");
printoutput("");

}
else if(this.id=="backspace"){

	var output=reverseno(getoutput()).toString();
	if(output){
output=output.substr(0,output.length-1);
printoutput(output);

	}
}
else{

var output=getoutput();
var history=gethistory();

if(output=="" && history!=""){
	if(isNaN(history[history.length-1]))
	{ history=history.substr(0,history.length-1);


	}
}
if(output!=="" || history!=="")
{
output=output=""? output:reverseno(output);
history=history+output;
if(this.id=="="){
var result=eval(history);
printoutput(result);
printhistory("");
}
else
{ history=history+this.id;
	printhistory(history);
	printoutput("");


}

}

}


});


}
let number= document.getElementsByClassName("number");

for(var j=0;j<number.length; j++)
{

number[j].addEventListener('click',function() {
var output=reverseno(getoutput());
if(output!=NaN){

output=output+this.id;
printoutput(output);

}

})
	

}


