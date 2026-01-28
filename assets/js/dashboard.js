document.addEventListener('DOMContentLoaded', () => {
    // Approved Loans Chart
    if (document.getElementById('approvedLoansChart')) {
        const ctx1 = document.getElementById('approvedLoansChart').getContext('2d');
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['2025-09', '2025-10', '2025-11', '2025-12', '2026-01'],
                datasets: [{
                    label: 'უნივერსალური პროგრამა',
                    data: [886000, 920000, 850000, 950000, 1050000],
                    borderColor: '#bd00ca',
                    backgroundColor: 'rgba(189, 0, 202, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Portfolio Dynamics Chart
    if (document.getElementById('portfolioChart')) {
        const ctx2 = document.getElementById('portfolioChart').getContext('2d');
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['2025-09', '2025-10', '2025-11', '2025-12', '2026-01'],
                datasets: [{
                    label: 'პორტფელის დინამიკა',
                    data: [0, 150000, 450000, 800000, 1200000],
                    borderColor: '#485fc7',
                    backgroundColor: 'rgba(72, 95, 199, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Mobile Sidebar Toggle
    const sidebarToggle = document.getElementById('toggleSidebar');
    const burger = document.querySelector('.navbar-burger');
    const sidebar = document.getElementById('sidebarMain');
    const body = document.body;

    function toggleSidebar() {
        sidebar.classList.toggle('is-active');
        body.classList.toggle('is-sidebar-active');
        if (window.innerWidth < 1024) {
            // Mobile behavior
        } else {
            body.classList.toggle('sidebar-collapsed');
        }
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    if (burger) {
        burger.addEventListener('click', () => {
            sidebar.classList.toggle('is-active');
            burger.classList.toggle('is-active');
        });
    }

    // Dropdowns in sidebar
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('is-active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('is-active');
            });
        }
    });

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link, .submenu-link');

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('is-active');

            // If it's a submenu link, make sure parent is expanded
            const parentDropdown = link.closest('.has-dropdown');
            if (parentDropdown) {
                parentDropdown.classList.add('is-active');
            }
        }
    });
});
