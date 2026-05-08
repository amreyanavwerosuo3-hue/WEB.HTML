// --- SIGNUP LOGIC ---
const signupForm = document.getElementById('signup-form'); // Ensure HTML has id="signup-form"

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Capture inputs
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // 2. Retrieve existing list or create empty array
        const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

        // 3. Prevent duplicate emails (MANDATORY REQUIREMENT)
        const exists = allUsers.find(user => user.email === email);
        if (exists) {
            alert("Email already registered!");
            return;
        }

        // 4. Save the user object correctly
        allUsers.push({ name, email, password });
        localStorage.setItem('allUsers', JSON.stringify(allUsers)); // Fixed 'userData' typo

        alert("Account created successfully!");
        window.location.href = "login.html"; 
    });
}
// --- LOGIN PAGE LOGIC ---
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Get values and force them to lowercase
        const emailInput = document.getElementById('login-email').value.toLowerCase().trim();
        const passwordInput = document.getElementById('login-password').value;

        // 2. Get the same list the Signup page used
        const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

        // 3. Find the user (normalizing the search)
        const foundUser = allUsers.find(user => user.email.toLowerCase() === emailInput);

        if (foundUser) {
            // 4. Validate password
            if (foundUser.password === passwordInput) {
                // SUCCESS: Save "loggedInUser" for the Dashboard [cite: 73, 74]
                localStorage.setItem('loggedInUser', foundUser.name);
                window.location.href = "dashboard.html"; 
            } else {
                alert("Incorrect password!");
            }
        } else {
            alert("No account found with this email. Please sign up first.");
        }
    });
}
// 1. Select the name display and logout button
const userNameSpan = document.getElementById('userName');
const logoutBtn = document.getElementById('logout-btn');

// --- DISPLAY LOGIC ---
// This runs as soon as the dashboard loads
if (userNameSpan) {
    const savedName = localStorage.getItem('loggedInUser');

    if (savedName) {
        // Update the "Welcome" text with the user's name
        userNameSpan.textContent = savedName;
    } else {
        // PROTECT THE PAGE: If no one is logged in, send them to Login
        window.location.href = "login.html";
    }
}

// --- LOGOUT LOGIC ---
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // 1. Clear the session
        localStorage.removeItem('loggedInUser');

        // 2. Send user back to Home page
        console.log("User logged out");
        window.location.href = "project2.html"; 
    });
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the menu
        navLinks.classList.toggle('active');
        
        // Optional: Animate the hamburger into an 'X'
        hamburger.classList.toggle('is-active');
    });
}