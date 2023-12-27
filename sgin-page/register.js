document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    const response = await fetch('http://localhost:7999', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password,email })
    });

    if (response.ok) {
        alert('User registered successfully');

        window.location.href = "/page-2/index.html";
    } else {
        alert('Error registering user');
    }
});
