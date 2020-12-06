var input = document.getElementById("input");
var btn = document.getElementById("btn");
var tagLi = document.getElementsByTagName("li");

input.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		btn.click();
	}
});

function addToDo() {
	var li = document.createElement("li");
	li.id = "idli"
	var inputValue = document.getElementById("input").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === "") {
		console.log("alert");
	} else if (tagLi.length <= 14) {
		document.getElementById("list").appendChild(li);
		document.getElementById("input").value = "";
	} else if (tagLi.length > 14) {
		alert("Önce yapılacakları bitir");
	}
	li.addEventListener("click", /* finifshTodo */ );
}

/* not working function finifshTodo() {
document.querySelectorAll("li").this.style.textDecoration = "line-through";
} */

function addBtn() {
	addToDo();
}
