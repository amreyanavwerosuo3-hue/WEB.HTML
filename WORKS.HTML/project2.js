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
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from refreshing/bouncing

        // Get the values EXACTLY when the button is clicked
        const nameInput = document.getElementById('login-name').value;
        const emailInput = document.getElementById('login-email').value;

        // Check if the inputs themselves exist before reading .value
        if (nameInput && emailInput) {
            const nameValue = nameInput.value;
            localStorage.setItem('loggedInUser', nameValue);
            window.location.href = "dashboard.html";
        }

        // DEBUG: This will show you in the console if the name is actually caught
        console.log("Attempting to save name:", nameInput);

        if (nameInput) {
            // Store it! (Make sure there are no typos in 'loggedInUser')
            localStorage.setItem('loggedInUser', nameInput);
            
            // Move to dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Please enter your name!");
        }
    });
}

// Inside your login/signup submit function
const nameValue = document.getElementById('login-name').value;

// Save it using this EXACT key: 'currentUser'
localStorage.setItem('loggedInUser', nameValue);

window.location.href = "dashboard.html";

// Run this as soon as the dashboard loads


// This runs as soon as the Dashboard page loads
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('loggedInUser');

    console.log("Dashboard found name:", savedName);

    if (savedName) {
        // Ensure your HTML has <span id="userName"></span>
        const nameDisplay = document.getElementById('userName');
        if (nameDisplay) {
            nameDisplay.textContent = savedName;
        }
    } else {
        // If it's still null, redirect back to login
        console.warn("No user found, redirecting...");
        window.location.href = "login.html";
    }
});


// Put this at the very top of your dashboard script
window.addEventListener('DOMContentLoaded', () => {
    // Look for the EXACT same key we used in login
    const savedName = localStorage.getItem('currentUser');

    if (savedName) {
        // Find the span and update the text
        document.getElementById('display-name').textContent = savedName;
    } else {
        console.log("No name found in storage!");
    }
});

const dashboardNameSpan = document.getElementById('userName');

// ONLY run this if we are on the Dashboard page
if (dashboardNameSpan) {
    const savedName = localStorage.getItem('loggedInUser');
    
    if (savedName) {
        dashboardNameSpan.textContent = savedName;
    } else {
        // Optional: If they aren't logged in, send them back
        // window.location.href = "login.html";
    }
}
// Logout Logic (Clears storage and redirects)
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'project2.html';

});


    // 2. Get the values from your inputs
    const name = document.getElementById('login-name').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // 3. Logic check (For now, we'll just check if they aren't empty)
    if ( name && email && password) {
        
        // MANDATORY: Save the name/email to localStorage so the Dashboard can see it
        // Since you're using email, let's extract a "name" or just store the email
        localStorage.setItem('loggedInUser', name);

        // 4. NOW move to the dashboard
        console.log("Success! Redirecting...");
        window.location.href = "dashboard.html"; 
        
    } else {
        alert("Please enter your credentials.");
    }
;

const userNameSpan = document.getElementById('userName');

if (userNameSpan) {
    const data = localStorage.getItem('loggedInUser');
    if (data) {
        userNameSpan.textContent = data;
    }
}