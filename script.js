const table = document.querySelector('.tabela');
const tableBody = document.querySelector('#body');

async function getData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments');
	const data = await response.json();
	return data;
}
getData().then((data) => {
    const comments=data.slice(0,20)
    comments.forEach(element => {
        // dodać checkbox do tabeli i zbierać zaznaczone
        tableBody.innerHTML += `
        <tr id='comment${element.id}'>
        <td>${element.id}</td>
		<td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.body}</td>
        <td><button data-id='comment${element.id}'>Usun</button></td>
		</tr>
        `
    });
    // checkbox - 2

    const buttons = Array.from(document.querySelectorAll('button'));
    
buttons.forEach((button)=> {

button.addEventListener("click",(e)=>{
    
    // złapać po id tr
    const commentToRemove = document.querySelector(`#${e.target.dataset.id}`)
    // wyrzucić
    
commentToRemove.remove();
})

})


})
