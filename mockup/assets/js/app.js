// QCrypto Mockup - Navigation & Interactions
// Simple JavaScript for mockup functionality (no backend)

// Mock user with all roles (for testing)
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  roles: [
    { id: 'client', name: 'Client Account Manager', dashboard: 'pages/client/dashboard.html' },
    { id: 'q-admin', name: 'Q Securities Admin', dashboard: 'pages/admin/q-admin-dashboard.html' },
    { id: 'aifm-admin', name: 'AIFM Administrator', dashboard: 'pages/aifm/aifm-dashboard.html' },
    { id: 'fund-manager', name: 'Fund Manager', dashboard: 'pages/aifm/fund-manager-dashboard.html' },
    { id: 'trader', name: 'Trader', dashboard: 'pages/aifm/trader-dashboard.html' },
    { id: 'middle-office', name: 'Middle Office', dashboard: 'pages/aifm/middle-office-dashboard.html' },
    { id: 'depositary', name: 'Depositary', dashboard: 'pages/aifm/depositary-dashboard.html' }
  ],
  currentRole: 'client'
};

// Store user in sessionStorage
function setCurrentUser(user) {
  sessionStorage.setItem('qcrypto_user', JSON.stringify(user));
}

function getCurrentUser() {
  const userData = sessionStorage.getItem('qcrypto_user');
  return userData ? JSON.parse(userData) : null;
}

function setCurrentRole(roleId) {
  const user = getCurrentUser();
  if (user) {
    user.currentRole = roleId;
    setCurrentUser(user);
  }
}

// Mock authentication success
function handleLogin(event) {
  event.preventDefault();
  
  // Set mock user with all roles
  setCurrentUser(mockUser);
  
  // Show success message
  showSuccessMessage('Login successful! Redirecting to dashboard...');
  
  // Simulate redirect after 1.5 seconds
  setTimeout(() => {
    window.location.href = 'pages/client/dashboard.html';
  }, 1500);
}

function handleRegister(event) {
  event.preventDefault();
  
  // Set mock user with all roles
  setCurrentUser(mockUser);
  
  // Show success message
  showSuccessMessage('Account created successfully! Redirecting to dashboard...');
  
  // Simulate redirect after 1.5 seconds
  setTimeout(() => {
    window.location.href = 'pages/client/dashboard.html';
  }, 1500);
}

// Role switching functionality
function switchRole(roleId) {
  const user = getCurrentUser();
  if (!user) {
    showSuccessMessage('Please log in first');
    return;
  }
  
  const role = user.roles.find(r => r.id === roleId);
  if (!role) {
    showSuccessMessage('You do not have access to this role');
    return;
  }
  
  setCurrentRole(roleId);
  showSuccessMessage(`Switching to ${role.name}...`);
  
  setTimeout(() => {
    window.location.href = '../../' + role.dashboard;
  }, 1000);
}

// Show role switcher dropdown
function showRoleSwitcher() {
  const user = getCurrentUser();
  if (!user || user.roles.length <= 1) {
    return;
  }
  
  // Remove existing dropdown if any
  const existingDropdown = document.querySelector('.role-switcher-dropdown');
  if (existingDropdown) {
    existingDropdown.remove();
    return;
  }
  
  const dropdown = document.createElement('div');
  dropdown.className = 'role-switcher-dropdown';
  dropdown.style.cssText = `
    position: fixed;
    top: 70px;
    right: 20px;
    width: 320px;
    max-height: 500px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    overflow-y: auto;
  `;
  
  let rolesHTML = '';
  user.roles.forEach(role => {
    const isActive = role.id === user.currentRole;
    rolesHTML += `
      <div onclick="switchRole('${role.id}')" style="
        padding: 1rem;
        cursor: pointer;
        border-bottom: 1px solid #E0E0E0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${isActive ? 'background-color: #E3F2FD;' : ''}
      " onmouseover="this.style.backgroundColor='#F5F7FA'" onmouseout="this.style.backgroundColor='${isActive ? '#E3F2FD' : 'white'}'">
        <div>
          <div style="font-weight: 600; margin-bottom: 0.25rem;">${role.name}</div>
          <div style="font-size: 0.75rem; color: #757575;">${getRoleDescription(role.id)}</div>
        </div>
        ${isActive ? '<span style="color: #0066FF; font-weight: bold;">✓</span>' : ''}
      </div>
    `;
  });
  
  dropdown.innerHTML = `
    <div style="padding: 1rem; border-bottom: 2px solid #E0E0E0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px 12px 0 0;">
      <div style="font-size: 0.875rem; margin-bottom: 0.25rem; opacity: 0.9;">Switch Dashboard</div>
      <h3 style="font-size: 1.125rem; font-weight: 600;">Select Your Role</h3>
    </div>
    ${rolesHTML}
    <div style="padding: 1rem; background-color: #F5F7FA; text-align: center; font-size: 0.875rem; color: #757575; border-radius: 0 0 12px 12px;">
      You have access to ${user.roles.length} roles
    </div>
  `;
  
  document.body.appendChild(dropdown);
  
  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', function closeDropdown(e) {
      if (!dropdown.contains(e.target) && !e.target.closest('.role-switcher-btn')) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    });
  }, 100);
}

// Get role description
function getRoleDescription(roleId) {
  const descriptions = {
    'client': 'Manage your company account',
    'q-admin': 'System administration & oversight',
    'aifm-admin': 'Manage funds & strategies',
    'fund-manager': 'Portfolio & investor management',
    'trader': 'Execute trades & monitor positions',
    'middle-office': 'Settlement & risk monitoring',
    'depositary': 'Custody & transaction oversight'
  };
  return descriptions[roleId] || '';
}

// Initialize role switcher on page load
function initializeRoleSwitcher() {
  // Role switcher disabled - navigation handles role access
  return;
}

// Mock form submissions
function handleDeposit(event) {
  event.preventDefault();
  
  // Show success message
  showSuccessModal('Deposit Initiated', 'Your deposit request has been submitted. You will receive a confirmation once the transaction is confirmed on the blockchain.');
}

function handleWithdraw(event) {
  event.preventDefault();
  
  // Show success message
  showSuccessModal('Withdrawal Initiated', 'Your withdrawal request has been submitted for approval. You will receive a notification once it is processed.');
}

function handleStaking(event) {
  event.preventDefault();
  
  // Show success message
  showSuccessModal('Staking Activated', 'You have successfully opted in to Ethereum staking. Rewards will start accumulating within 24 hours.');
}

function handleTrade(event) {
  event.preventDefault();
  
  // Show success message
  showSuccessModal('Order Placed', 'Your market order has been executed successfully. Check your positions for details.');
}

// Utility functions for UI feedback
function showSuccessMessage(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success';
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '20px';
  alertDiv.style.right = '20px';
  alertDiv.style.zIndex = '9999';
  alertDiv.style.minWidth = '300px';
  alertDiv.innerHTML = `
    <strong>✓ Success!</strong><br>
    ${message}
  `;
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

function showSuccessModal(title, message) {
  // Create modal backdrop
  const backdrop = document.createElement('div');
  backdrop.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  // Create modal
  const modal = document.createElement('div');
  modal.style.cssText = `
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  `;
  
  modal.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #212121;">${title}</h2>
      <p style="color: #616161; margin-bottom: 2rem;">${message}</p>
      <button class="btn btn-primary" onclick="this.closest('[style*=fixed]').remove()">Close</button>
    </div>
  `;
  
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);
  
  // Close on backdrop click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.remove();
    }
  });
}

// Copy to clipboard functionality
function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonElement.textContent;
    buttonElement.textContent = 'Copied!';
    buttonElement.style.backgroundColor = '#66BB6A';
    
    setTimeout(() => {
      buttonElement.textContent = originalText;
      buttonElement.style.backgroundColor = '';
    }, 2000);
  });
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector('.layout-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// Initialize notification count (mock)
function initializeNotifications() {
  const notificationIcon = document.querySelector('.notification-icon');
  if (notificationIcon) {
    notificationIcon.addEventListener('click', () => {
      showNotificationDropdown();
    });
  }
}

function showNotificationDropdown() {
  const dropdown = document.createElement('div');
  dropdown.style.cssText = `
    position: fixed;
    top: 70px;
    right: 20px;
    width: 350px;
    max-height: 400px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    overflow-y: auto;
  `;
  
  dropdown.innerHTML = `
    <div style="padding: 1rem; border-bottom: 1px solid #E0E0E0;">
      <h3 style="font-size: 1.125rem; font-weight: 600;">Notifications</h3>
    </div>
    <div style="padding: 1rem;">
      <div style="padding: 0.75rem; background-color: #F5F7FA; border-radius: 8px; margin-bottom: 0.75rem;">
        <div style="font-weight: 600; margin-bottom: 0.25rem;">Deposit Confirmed</div>
        <div style="font-size: 0.875rem; color: #616161;">Your Bitcoin deposit has been confirmed.</div>
        <div style="font-size: 0.75rem; color: #9E9E9E; margin-top: 0.25rem;">2 hours ago</div>
      </div>
      <div style="padding: 0.75rem; background-color: #F5F7FA; border-radius: 8px; margin-bottom: 0.75rem;">
        <div style="font-weight: 600; margin-bottom: 0.25rem;">Staking Reward Received</div>
        <div style="font-size: 0.875rem; color: #616161;">You earned 0.0023 ETH from staking.</div>
        <div style="font-size: 0.75rem; color: #9E9E9E; margin-top: 0.25rem;">5 hours ago</div>
      </div>
      <div style="padding: 0.75rem; background-color: #F5F7FA; border-radius: 8px;">
        <div style="font-weight: 600; margin-bottom: 0.25rem;">Security Alert</div>
        <div style="font-size: 0.875rem; color: #616161;">New login from Chrome on Windows.</div>
        <div style="font-size: 0.75rem; color: #9E9E9E; margin-top: 0.25rem;">1 day ago</div>
      </div>
    </div>
    <div style="padding: 1rem; border-top: 1px solid #E0E0E0; text-align: center;">
      <a href="pages/client/notifications.html" style="color: #0066FF; font-weight: 500;">View All Notifications</a>
    </div>
  `;
  
  document.body.appendChild(dropdown);
  
  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', function closeDropdown(e) {
      if (!dropdown.contains(e.target) && !e.target.closest('.notification-icon')) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    });
  }, 100);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeNotifications();
  initializeRoleSwitcher();
  
  // Add event listeners for sidebar toggle
  const sidebarToggle = document.querySelector('.topbar-left button');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
  
  // Update user name in UI if logged in
  const user = getCurrentUser();
  if (user) {
    const userName = document.querySelector('.user-name');
    const userRole = document.querySelector('.user-role');
    if (userName) userName.textContent = user.name;
    if (userRole) {
      const currentRoleObj = user.roles.find(r => r.id === user.currentRole);
      if (currentRoleObj) userRole.textContent = currentRoleObj.name;
    }
  }
});
