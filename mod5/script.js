document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
  
    menuButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      window.location.href = 'menu.html'; // Redirect to the menu page
    });

    const navbarToggle = document.querySelector('.navbar-toggle');
        const navbarMenu = document.getElementById('navbar-menu');

        navbarToggle.addEventListener('click', function () {
            // Toggle the visibility of the navbar menu
            if (navbarMenu.classList.contains('in')) {
                navbarMenu.classList.remove('in'); // Hide the menu
            } else {
                navbarMenu.classList.add('in'); // Show the menu
            }
        });
        // Close the menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = navbarMenu.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                navbarMenu.classList.remove('in'); // Hide the menu
            }
        });

  });
  
