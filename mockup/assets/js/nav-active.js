// Set active navigation item based on current page
(function() {
  const currentPage = window.location.pathname.split('/').pop();
  const pageMatch = currentPage.replace('.html', '');
  
  const navItems = document.querySelectorAll('.sidebar-nav-item[data-page]');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === pageMatch) {
      item.classList.add('active');
    }
  });
})();
