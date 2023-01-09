const table = document.querySelector('.tabela');
const tableBody = document.querySelector('#body');
const deleteAll = document.querySelector('.deleteAll');

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
        <td><input id='checkbox'  data-id=${element.id} name=${element.name}  type='checkbox'/></td>
        <td>${element.id}</td>
		<td>${element.name}</td>
        <td>${element.email}</td>
         <td>${element.body} class = "bodys" </td>
        <td><button data-id='comment${element.id}'>Usuń</button></td>
		</tr>
        `;
	});
	

	const buttons = Array.from(document.querySelectorAll('button'));
	const checkboxList = Array.from(document.querySelectorAll("#checkbox"));
	const higlightText = document.getElementById('higlightText');

// bodys.forEach((body) => {
// higlightText.addEventListener('change', (e) => {
// if(higlightText.checked&&body.includes = "itaque"){
// 	bodys.style.color = 'red'
// }
// }
// PROBLEM

	


	let idToDelay = [];
	checkboxList.forEach((checkbox) => {
		checkbox.addEventListener('change', (e) => {
			if (e.target.checked) {
				idToDelay.push(e.target.dataset.id);
			} else {
				idToDelay = idToDelay.filter((item) => item !== e.target.dataset.id);
			}
		});
	});

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const commentToRemove = document.querySelector(`#${e.target.dataset.id}`);
			if (commentToRemove) commentToRemove.remove();
		});
	});

	deleteAll.addEventListener('click', (e) => {
		if (idToDelay.length !== 0) {
			idToDelay.forEach((item) => {
				const getElement = document.getElementById(`comment${item}`);
				if(getElement) getElement.remove()
			})
		}
	});

	
});


