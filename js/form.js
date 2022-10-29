

// custom seect option 
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});




const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();	
	checkInputs();
});



function checkInputs() {
	// trim to remove the whitespaces
	const firstName = firstName.value.trim();
	const lastName = lastName.value.trim();
	
	
	if(firstName === '') {
		setErrorFor();
	} 

	if(lastName === '') {
		setErrorFor();
	} 
	
}

function setErrorFor() {
	
	const error = document.querySelector('.error-text');
	error.classList.add = 'error-text error';
	
}

	












// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });