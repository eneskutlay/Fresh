var input = document.getElementById("input");
var btn = document.getElementById("btn");
var listItems = document.getElementsByClassName("listItems");
var specialKeys = "!clean"; //why don't added second variable item

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});

function addToDo() {
  var li = document.createElement("li");
  li.className = "listItems";
  li.id = "listItems";
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  checkItem();
  addItem();
  done();

  ///// Actions

  function addItem() {
    if (listItems.length <= 13 && inputValue != specialKeys) {
      document.getElementById("list").appendChild(li);
      document.getElementById("input").value = "";
    } else if (inputValue == specialKeys) {
      document.getElementById("input").value = "";
    } else {
      // clean input value for special keys
      document.getElementById("input").value = "";
      alert("önce yapılacakları bitir");
    }
  }

  function checkItem() {
    if (inputValue == "!clean") {
      var list = document.getElementById("list");
      while (list.firstChild) {
        list.firstChild.remove();
      }
    }
  }

  function done() {
    [...listItems].forEach((listItem) =>
      listItem.addEventListener("click", clickDone)
    );
    function clickDone() {
      this.style.color = "grey";
    }
  }
}

function addBtn() {
  addToDo();
}
