// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);

        // Check if fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // Step 5: Clear the "Loading..." text
        dataContainer.innerHTML = '';

        // Step 6: Create <ul>
        const userList = document.createElement('ul');

        // Step 7: Loop through users
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Step 8: Append the list
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 10: Run after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
