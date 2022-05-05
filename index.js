function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

const incrementButton = document.getElementById("bored")

incrementButton.innerHTML = parseInt(localStorage.getItem("points") || 0)

function increment() {
	let newValue = ++incrementButton.innerHTML

	incrementButton.innerHTML = newValue
	localStorage.setItem("points", newValue)
}

incrementButton.addEventListener("click", () => {
	increment()
})
