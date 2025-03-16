document.getElementById('fetch-button').addEventListener('click', fetchData);

function fetchData() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Clear previous data

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            dataContainer.innerHTML = `<p class="text-danger">Failed to fetch data: ${error.message}</p>`;
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'data-item';
        itemElement.innerHTML = `<p><strong>ID:</strong> ${item.id}</p>
                                 <p><strong>Title:</strong> ${item.title}</p>
                                 <p><strong>Completed:</strong> ${item.completed}</p>`;
        dataContainer.appendChild(itemElement);
    });
}