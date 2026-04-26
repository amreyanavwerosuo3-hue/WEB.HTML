document.addEventListener('DOMContentLoaded', () => {

const enrollBtn = document.getElementById('enrollButton');

// Example variables - in a real app, these come from your database/auth
let isLoggedIn = false; 
let isEnrolled = false;

function updateUI() {
    if (enrollBtn) {
    if (!isLoggedIn) {
        enrollBtn.innerText = "Login to Enroll";
        enrollBtn.classList.remove('enrolled');
    } else if (isLoggedIn && !isEnrolled) {
        enrollBtn.innerText = "Enroll Now";
        enrollBtn.classList.remove('enrolled');
    } else if (isEnrolled) {
        enrollBtn.innerText = "Enrolled ✅";
        enrollBtn.classList.add('enrolled'); // Turns the button green
    }
}
}

// Run the check on page load
updateUI();


// Select the form element
const signupForm = document.getElementById('signupForm');

if (signupForm) {
signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    console.log("Form submitted")
// Prevent page refresh

    // 1. Capture Input Values
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 2. Validate Inputs (Basic Check)
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // 3. Get existing users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 4. Prevent Duplicate Emails
    const isDuplicate = users.find(user => user.email === email);
    if (isDuplicate) {
        alert("An account with this email already exists.");
        return;
    }

    // 5. Create User Object
    const newUser = {
        name: name,
        email: email,
        password: password // In a real app, passwords should be hashed!
    };

    // 6. Save User to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account created successfully!");
    signupForm.reset(); // Clear the form
});
} else  {console.log("signup form not found on this page, skipping listener.");
}

}); 

