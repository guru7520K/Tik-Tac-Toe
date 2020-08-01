//console.log("Guru Keep Going!")
//Restart
var restat=document.querySelector("#b")

var  squares =document.querySelectorAll('td');
function clearBoard(){
  for (var i=0;i < squares.length;i++){
    squares[i].textContent="";
  }
}
restat.addEventListener('click',clearBoard)
function changeBoard(){
  if(this.textContent==="")
  {
    this.textContent="X";
  }else if(this.textContent==="X"){
    this.textContent='O';

  }else {
    this.textContent='';
  }
}
//Grabs all
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeBoard)
}
