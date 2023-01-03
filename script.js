const table = document.querySelector('.tabela');
const tableBody = document.querySelector('#body');

async function getData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments');
	const data = await response.json();
	return data;
}
getData().then((data) => {
	const comments = data.slice(0, 20);

	comments.forEach((element) => {
		// dodać checkbox do tabeli i zbierać zaznaczone

		tableBody.innerHTML += `
  
        <tr id='comment${element.id}'>
        <td><input data-id={${element.id}} name={${element.name}}  type='checkbox'/></td>
        <td>${element.id}</td>
		<td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.body}</td>
        <td><button data-id='comment${element.id}'>Usun</button></td>
		</tr>
        `;
	});

	const buttons = Array.from(document.querySelectorAll('button'));
	const inputs = Array.from(document.querySelectorAll('input'));

	console.log(inputs);

	// let result = function resultInputs() {
	//     inputs.filter()
	// }
	let idToDelay = [];
	inputs.forEach((input) => {
		input.addEventListener('change', (e) => {
			if (e.target.checked) {
				idToDelay.push(e.target.dataset.id);
				console.log(idToDelay);
			} else {
				idToDelay = idToDelay.filter((item) => item !== e.target.dataset.id);
				console.log(idToDelay);
			}
		});
	});

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const commentToRemove = document.querySelector(`#${e.target.dataset.id}`);
			commentToRemove.remove();
		});
	});
});
// przefiltrowac po tablicy te zaznaczone i je wyrzucic
