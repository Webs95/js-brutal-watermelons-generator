const container = document.querySelector(".container"); // Get element

let watermelon = prompt(`How many watermelons do you want❓🍉`, 1000); // Question for user

for (let i = 0; i < watermelon; i++) {
	const box = document.createElement("div"); // Create block
	box.classList.add("box"); // Add class for block
	box.innerHTML = `
	<div><img class="glasses" src="https://svgsilh.com/svg/1088490.svg" alt="glasses"></div>
	<div>${i + 1}</div>
	`; // Add number and svg in block
	container.append(box); // Add bloks in container
}
