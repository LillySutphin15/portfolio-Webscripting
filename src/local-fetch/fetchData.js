async function fetchData() {
    try {
        const response = await fetch('http://localhost:3003');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const list = document.getElementById('numbers-list');
        data.forEach(number => {
            const listItem = document.createElement('li');
            listItem.textContent = number;
            list.appendChild(listItem);
        });
    } catch (error) {
        document.getElementById('content').innerHTML = '<p>API server is not running or there was an error fetching data.</p>';
    }
}

fetchData();