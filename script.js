 var a=0

function change(){

let b=["red","green","yellow","orange","pink","purple"]

if(a > b.length-1){

a=0

 }

 document.getElementsByTagName("body")[0].style.backgroundColor=b [a++]
}
