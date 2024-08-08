document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('feedbackError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    let isValid = true;

    // Validate Name
    if (name.length < 2 || name.length > 100) {
        document.getElementById('nameError').textContent = 'Name must be between 2 and 100 characters.';
        isValid = false;
    }

    // Validate Email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        isValid = false;
    }

    // Validate Feedback
    if (feedback.length < 10 || feedback.length > 500) {
        document.getElementById('feedbackError').textContent = 'Feedback must be between 10 and 500 characters.';
        isValid = false;
    }

    if (!isValid) {
        return; // Stop form submission if validation fails
    }

    const formData = {
        name,
        email,
        feedback
    };

    try {
        const response = await fetch('http://localhost:3000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thank you for your feedback!');
            document.getElementById('feedbackForm').reset(); // Reset the form on successful submission
        } else {
            alert('Failed to submit feedback.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
