document.getElementById('homeBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '<h2>Welcome to the Rabbit Farm Management App</h2>';
});

document.getElementById('addRabbitBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
        <h2>Add New Rabbit</h2>
        <form id="rabbitForm">
            <label for="serialNumber">Serial Number:</label><br>
            <input type="text" id="serialNumber" name="serialNumber"><br>

            <label for="cageNumber">Cage Number:</label><br>
            <input type="text" id="cageNumber" name="cageNumber"><br>

            <!-- Add more form fields here -->

            <button type="submit">Add Rabbit</button>
        </form>
    `;

    document.getElementById('rabbitForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const rabbitData = {
            serialNumber: document.getElementById('serialNumber').value,
            cageNumber: document.getElementById('cageNumber').value,
            // Get values from other fields
        };

        fetch('/add-rabbit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rabbitData)
        }).then(res => res.json())
          .then(data => {
              alert('Rabbit added successfully!');
          });
    });
});

document.getElementById('addCageBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '<h2>Add New Cage</h2>';
});
