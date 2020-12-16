var input = document.getElementById("input");
var btn = document.getElementById("btn");
var tagLi = document.getElementsByTagName("li");
var specialKeys = ["!clear"];

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});

function addToDo() {
  var li = document.createElement("li");
  li.id = "idli";
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  checkItem();
  addItem();

  ///// Actions
  function checkItem() {
    if (inputValue == "!clear") {
      alert("itemleri temizle");
    } else {
    }
  }
  function addItem() {
    if (tagLi.length <= 13 && inputValue != specialKeys) {
      document.getElementById("list").appendChild(li);
      document.getElementById("input").value = "";
    } else {
      alert("önce yapılacakları bitir");
    }
  }
}

/* not working function finifshTodo() {
document.querySelectorAll("li").this.style.textDecoration = "line-through";
} 
li.addEventListener("click",  finifshTodo  );
*/

function addBtn() {
  addToDo();
}
