// Skicka kontaktformulär via JavaScript
document.getElementById('kontaktForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enkel validering
    if (name && email && message) {
        alert("Tack för ditt meddelande, " + name + "! Vi återkommer till dig snart.");
        document.getElementById('kontaktForm').reset(); // Töm formuläret
    } else {
        alert("Vänligen fyll i alla fält.");
    }
});
