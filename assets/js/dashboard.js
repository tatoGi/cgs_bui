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

    // Create sidebar overlay element
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Sidebar Toggle
    const sidebarToggle = document.getElementById('toggleSidebar');
    const burger = document.querySelector('.navbar-burger');
    const sidebar = document.getElementById('sidebarMain');
    const body = document.body;

    function closeSidebar() {
        body.classList.remove('sidebar-open');
        sidebar.classList.remove('is-active');
        if (burger) {
            burger.classList.remove('is-active');
        }
    }

    function toggleSidebar() {
        if (window.innerWidth < 1024) {
            // Mobile/tablet: slide-in overlay
            if (body.classList.contains('sidebar-open')) {
                closeSidebar();
            } else {
                body.classList.add('sidebar-open');
                sidebar.classList.add('is-active');
            }
        } else {
            // Desktop: collapse sidebar
            body.classList.toggle('sidebar-collapsed');
        }
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    if (burger) {
        burger.addEventListener('click', () => {
            toggleSidebar();
            burger.classList.toggle('is-active');
        });
    }

    // Close sidebar when clicking overlay
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar overlay on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });

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

    // Filter card collapse toggle
    const filterCards = document.querySelectorAll('.filter-card');
    filterCards.forEach(card => {
        const collapseBtn = card.querySelector('.collapse-icon');
        if (collapseBtn) {
            collapseBtn.addEventListener('click', () => {
                card.classList.toggle('is-collapsed');
            });
        }
    });
});
