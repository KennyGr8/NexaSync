// Toggle Sidebar on Menu Icon Click
const menuIcon = document.getElementById('menu-icon');
const navItems = document.querySelector('.nav-items');

// Toggling the sidebar
document.getElementById('menuIcon').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});

// Closing sidebar if clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#menuIcon')) {
        document.getElementById('sidebar').style.display = 'none';
    }
});

// Function to toggle dropdown visibility
function toggleDropdown(dropdown) {
    const isVisible = dropdown.style.display === 'block';

    // Hide all dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });

    // Show the clicked dropdown if it wasn't already visible
    if (!isVisible) {
        dropdown.style.display = 'block';
    }
}

// Event listener for primary nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = link.querySelector('.dropdown-menu');

        // Handle dropdown visibility
        if (dropdown) {
            toggleDropdown(dropdown);
        }
    });
});

// Event listener for nested dropdowns
document.querySelectorAll('.dropdown-menu .nav-link').forEach(nestedLink => {
    nestedLink.addEventListener('click', (e) => {
        e.preventDefault();
        const nestedDropdown = nestedLink.querySelector('.dropdown-menu');

        // Handle nested dropdown visibility
        if (nestedDropdown) {
            toggleDropdown(nestedDropdown);
        }
    });
});

// Close dropdowns if clicked outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-link')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});


// Make icons clickable and handle notifications
const icons = document.querySelectorAll('.top-right-icons i');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const iconName = icon.classList.contains('bx-bell') ? 'notification' : 'user';
        handleIconClick(iconName);
    });
});

// Function to handle icon clicks
const handleIconClick = (iconName) => {
    if (iconName === 'notification') {
        // Show notifications (example logic)
        console.log('Bell icon clicked');
        showNotification();
    } else if (iconName === 'user') {
        // Handle user icon click (e.g., open user profile)
        console.log('User icon clicked');
    }
};

// Notification counts
let messageCount = 0;
let updateCount = 0;

// Show Notifications for Logins and Updates
const showNotification = () => {
    // Example count updates
    messageCount += 5; // New messages
    updateCount += 1; // New updates

    const bellIcon = document.querySelector('.top-right-icons .bx-bell');
    bellIcon.classList.add('notify');
    bellIcon.setAttribute('data-count', messageCount);
};

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Typed.js for Home section
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: ['Scholars\' Academy', 'Your Learning Hub', 'Innovate and Grow'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    };

    new Typed('#academy', options);
});

// Smooth Scroll for Sidebar Links
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for fixed nav height
            behavior: 'smooth'
        });
        sidebar.classList.remove('active'); // Close sidebar after click
    });
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scholars' Academy</title>

    <!-- Boxicons CSS -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>

    <!-- Typed.js -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
</head>
<body>
    <!-- Header Section -->
    <nav class="nav" id="nav">
        <div class="nav-container">
            <div class="logo">
                <a href="#">Scholars' Academy</a>
            </div>
    
            <div class="menu-icon">
                <i class="bx bx-menu" id="menu-icon"></i>
            </div>
        </div>

        <!-- Courses Section -->
        <div class="nav-items">
            <div class="nav-link">
                <a href="#">Courses <i class="bx bx-chevron-right"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Digital Courses <i class="bx bx-chevron-up"></i></a>
                        <ul class="dropdown-submenu">
                            <li><a href="#">Web Development & Design <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">HTML, CSS, and JavaScript Basics</a></li>
                                    <li><a href="#">Responsive Web Design</a></li>
                                    <li><a href="#">Advanced JavaScript (ES6+)</a></li>
                                    <li><a href="#">React, Angular, or Vue.js</a></li>
                                    <li><a href="#">Backend Development with Node.js</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Programming & Software Development <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Python for Beginners</a></li>
                                    <li><a href="#">Java Programming Essentials</a></li>
                                    <li><a href="#">C++ and Object-Oriented Programming</a></li>
                                    <li><a href="#">Full-Stack Development</a></li>
                                    <li><a href="#">Mobile App Development with Flutter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">STEM Courses <i class="bx bx-chevron-up"></i></a>
                        <ul class="dropdown-submenu">
                            <li><a href="#">Biotechnology <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Genomics and Bioinformatics</a></li>
                                    <li><a href="#">Molecular Biology Techniques</a></li>
                                    <li><a href="#">CRISPR and Genetic Engineering</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Engineering <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Mechanical Engineering</a></li>
                                    <li><a href="#">Electrical Engineering</a></li>
                                    <li><a href="#">Civil Engineering</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Humanities</a></li>
                    <li><a href="#">Business</a></li>
                </ul>
            </div>

        <!-- Resources Section etc. -->
            <div class="nav-link">
                <a href="#">Resources <i class="bx bx-chevron-right"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Digital Courses <i class="bx bx-chevron-up"></i></a>
                        <ul class="dropdown-submenu">
                            <li><a href="#">Web Development & Design <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">HTML, CSS, and JavaScript Basics</a></li>
                                    <li><a href="#">Responsive Web Design</a></li>
                                    <li><a href="#">Advanced JavaScript (ES6+)</a></li>
                                    <li><a href="#">React, Angular, or Vue.js</a></li>
                                    <li><a href="#">Backend Development with Node.js</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Programming & Software Development <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Python for Beginners</a></li>
                                    <li><a href="#">Java Programming Essentials</a></li>
                                    <li><a href="#">C++ and Object-Oriented Programming</a></li>
                                    <li><a href="#">Full-Stack Development</a></li>
                                    <li><a href="#">Mobile App Development with Flutter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">STEM Courses <i class="bx bx-chevron-up"></i></a>
                        <ul class="dropdown-submenu">
                            <li><a href="#">Biotechnology <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Genomics and Bioinformatics</a></li>
                                    <li><a href="#">Molecular Biology Techniques</a></li>
                                    <li><a href="#">CRISPR and Genetic Engineering</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Engineering <i class="bx bx-chevron-up"></i></a>
                                <ul class="dropdown-submenu">
                                    <li><a href="#">Mechanical Engineering</a></li>
                                    <li><a href="#">Electrical Engineering</a></li>
                                    <li><a href="#">Civil Engineering</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Humanities</a></li>
                    <li><a href="#">Business</a></li>
                </ul>
            </div>

        <!-- About Us Section etc. -->
            <div class="nav-link">
            <a href="#">About Us <i class="bx bx-chevron-right"></i></a>
            <ul class="dropdown-menu">
                <li><a href="#">Digital Courses <i class="bx bx-chevron-up"></i></a>
                    <ul class="dropdown-submenu">
                        <li><a href="#">Web Development & Design <i class="bx bx-chevron-up"></i></a>
                            <ul class="dropdown-submenu">
                                <li><a href="#">HTML, CSS, and JavaScript Basics</a></li>
                                <li><a href="#">Responsive Web Design</a></li>
                                <li><a href="#">Advanced JavaScript (ES6+)</a></li>
                                <li><a href="#">React, Angular, or Vue.js</a></li>
                                <li><a href="#">Backend Development with Node.js</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Programming & Software Development <i class="bx bx-chevron-up"></i></a>
                            <ul class="dropdown-submenu">
                                <li><a href="#">Python for Beginners</a></li>
                                <li><a href="#">Java Programming Essentials</a></li>
                                <li><a href="#">C++ and Object-Oriented Programming</a></li>
                                <li><a href="#">Full-Stack Development</a></li>
                                <li><a href="#">Mobile App Development with Flutter</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">STEM Courses <i class="bx bx-chevron-up"></i></a>
                    <ul class="dropdown-submenu">
                        <li><a href="#">Biotechnology <i class="bx bx-chevron-up"></i></a>
                            <ul class="dropdown-submenu">
                                <li><a href="#">Genomics and Bioinformatics</a></li>
                                <li><a href="#">Molecular Biology Techniques</a></li>
                                <li><a href="#">CRISPR and Genetic Engineering</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Engineering <i class="bx bx-chevron-up"></i></a>
                            <ul class="dropdown-submenu">
                                <li><a href="#">Mechanical Engineering</a></li>
                                <li><a href="#">Electrical Engineering</a></li>
                                <li><a href="#">Civil Engineering</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">Humanities</a></li>
                <li><a href="#">Business</a></li>
            </ul>
            </div>
        </div>
        
        <div class="top-right-icons">
            <i class="bx bx-bell"></i>
            <i class="bx bx-user"></i>
        </div>
    </nav>

    <!-- Home Section -->
    <section class="home" id="home">
        <div class="home-content">
            <h1>Welcome to <span class="typing" id="academy"></span></h1>
            <p>Your journey to knowledge and excellence starts here. Explore a wide range of courses and resources tailored to empower your mind and career.</p>
            <a href="#" class="btn">Get Started</a>
        </div>
    </section>

    <!-- JavaScript -->
    <script src="index.js"></script>
</body>
</html>

// Toggle Sidebar on Menu Icon Click
const menuIcon = document.getElementById('menu-icon');
const navItems = document.querySelector('.nav-items');

// Toggling the sidebar
document.getElementById('menuIcon').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});

// Closing sidebar if clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#menuIcon')) {
        document.getElementById('sidebar').style.display = 'none';
    }
});

// Function to toggle dropdown visibility
function toggleDropdown(dropdown) {
    const isVisible = dropdown.style.display === 'block';

    // Hide all dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });

    // Show the clicked dropdown if it wasn't already visible
    if (!isVisible) {
        dropdown.style.display = 'block';
    }
}

// Event listener for primary nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = link.querySelector('.dropdown-menu');

        // Handle dropdown visibility
        if (dropdown) {
            toggleDropdown(dropdown);
        }
    });
});

// Event listener for nested dropdowns
document.querySelectorAll('.dropdown-menu .nav-link').forEach(nestedLink => {
    nestedLink.addEventListener('click', (e) => {
        e.preventDefault();
        const nestedDropdown = nestedLink.querySelector('.dropdown-menu');

        // Handle nested dropdown visibility
        if (nestedDropdown) {
            toggleDropdown(nestedDropdown);
        }
    });
});

// Close dropdowns if clicked outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-link')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});


// Make icons clickable and handle notifications
const icons = document.querySelectorAll('.top-right-icons i');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const iconName = icon.classList.contains('bx-bell') ? 'notification' : 'user';
        handleIconClick(iconName);
    });
});

// Function to handle icon clicks
const handleIconClick = (iconName) => {
    if (iconName === 'notification') {
        // Show notifications (example logic)
        console.log('Bell icon clicked');
        showNotification();
    } else if (iconName === 'user') {
        // Handle user icon click (e.g., open user profile)
        console.log('User icon clicked');
    }
};

// Notification counts
let messageCount = 0;
let updateCount = 0;

// Show Notifications for Logins and Updates
const showNotification = () => {
    // Example count updates
    messageCount += 5; // New messages
    updateCount += 1; // New updates

    const bellIcon = document.querySelector('.top-right-icons .bx-bell');
    bellIcon.classList.add('notify');
    bellIcon.setAttribute('data-count', messageCount);
};

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Typed.js for Home section
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: ['Scholars\' Academy', 'Your Learning Hub', 'Innovate and Grow'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    };

    new Typed('#academy', options);
});

// Smooth Scroll for Sidebar Links
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(linzk => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for fixed nav height
            behavior: 'smooth'
        });
        sidebar.classList.remove('active'); // Close sidebar after click
    });
});

