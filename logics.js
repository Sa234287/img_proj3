document.getElementById('sign-in-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const url = 'https://reqres.in/api/login';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Login successful:', result);
        } else {
            throw new Error(result.error || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message;
    }
});
document.getElementById('sign-in-form').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('sign-in-form').requestSubmit();
    }
});