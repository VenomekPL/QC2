# QCrypto Platform

QCrypto is a comprehensive **Custodial Wallet Provider** platform designed to offer secure, compliant, and user-friendly asset management for both retail and corporate clients. The platform integrates advanced features for portfolio tracking, transaction management, and regulatory compliance (KYC/KYB/AML), making it a robust solution for modern digital asset operations.

## Getting Started

This repository contains a high-fidelity **HTML/CSS/JS Mockup** of the QCrypto platform. It is designed to demonstrate the user interface, user experience flows, and feature set without requiring a backend connection.

### Navigation Instructions
*   **Login**: The login pages (`mockup/login.html`) are for demonstration purposes. You can enter **any username and password** to access the dashboard. The system assumes all credentials are correct.
*   **Role Switching**: The mockup includes views for different user roles. You can navigate between them using the file structure or links provided within the dashboard (if applicable).
    *   **Client Panel**: Located in `mockup/pages/client/`
    *   **Admin Panel**: Located in `mockup/pages/admin/`
*   **Interactivity**: Most buttons and navigation items are interactive and will link to the corresponding pages or open modals to demonstrate functionality.

---

# Platform Features

This section outlines the features, widgets, and functionality available across the QCrypto platform, categorized by user role and page.

## General Features

### Sidebar Navigation
*   **Role-Based Access**: The sidebar dynamically shows sections relevant to the user's role (Client, Admin).
*   **Navigation Links**: Quick access to all major modules of the application.
*   **Active State**: Visual indicator for the currently active page.

### Top Bar
*   **Sidebar Toggle**: Button to collapse/expand the sidebar on smaller screens.
*   **Search Bar**: Global search functionality (context-aware based on the active module).
*   **Notifications**: Bell icon with a badge count for unread notifications.
*   **User Menu**: Displays user avatar, name, and role.

---

## Client Panel

### Dashboard (`client/dashboard.html`)
*   **Stats Grid**:
    *   **Total Portfolio Value**: Displays total value in EUR with 24h change (absolute and percentage).
    *   **Fiat Balance**: Current fiat holdings available for trading or withdrawal.
    *   **Crypto Assets**: Count of distinct crypto assets held.
    *   **Locked in Staking**: Total value of assets currently staked.
*   **Balance History Chart**: Line chart showing portfolio value over time. Includes time filters: 7D, 30D, 90D, YTD.
*   **Portfolio Distribution**: Donut chart visualizing the percentage allocation of different assets (e.g., BTC, ETH, USDT).
*   **Recent Activity**: A summary list of the most recent transactions.

### Wallets (`client/wallets.html`)
*   **Asset Sections**: Dedicated sections for each supported asset (Bitcoin, Ethereum, etc.).
*   **Asset Summary**: Displays total balance and value for the specific asset, with 24h change.
*   **Address Management**:
    *   **List Addresses**: View all generated addresses for an asset.
    *   **Add Address**: Button to generate a new deposit address.
    *   **Edit Name**: Rename wallets/addresses for easier identification.
    *   **Copy Address**: One-click copy to clipboard.
    *   **QR Code**: Toggle visibility of QR code for mobile deposits.
*   **Quick Actions**:
    *   **Deposit**: Initiate a deposit to a specific address.
    *   **Withdraw**: Initiate a withdrawal from a specific address.
    *   **Stake**: Direct link to staking for supported assets (e.g., ETH).

### Transactions (`client/transactions.html`)
*   **Advanced Filters**:
    *   **Search**: Filter by Transaction Hash, Address, or Note.
    *   **Date Range**: Select start and end dates.
    *   **Type**: Filter by Deposit, Withdrawal, Trade, Staking, Fee, Commission.
    *   **Asset**: Filter by specific cryptocurrency or fiat.
    *   **Status**: Filter by Completed, Pending, Failed.
*   **Export Tools**: Buttons to download transaction history as PDF or CSV.
*   **Transactions Table**: Detailed list showing Date/Time, Type (with badges), Asset, Amount, Value (EUR), Fee, Tx Hash (linked), and Status.

### Address Book (`client/address-book.html`)
*   **Address Management**:
    *   **Whitelisting**: Only whitelisted addresses can be used for withdrawals, enhancing security.
    *   **Tagging System**: Organize addresses with custom tags (e.g., "Cold Storage", "Vendor").
    *   **Network Filtering**: Filter addresses by blockchain network (Bitcoin, Ethereum, Solana, etc.).
*   **Compliance & Travel Rule**:
    *   **Origin Declaration**: Mandatory declaration of wallet type (Custodial vs. Non-Custodial) for regulatory compliance (CASP/VASP).
    *   **Ownership Verification**: Specify if the wallet is owned by the user or a third party.
    *   **Beneficiary Details**: Required fields for third-party beneficiaries to satisfy anti-money laundering (AML) regulations.
*   **Use Case**:
    *   **Managed Accounts**: Owners can manage the address book and whitelist approved beneficiaries, while lower-privilege "Trader" or "Worker" accounts can only initiate transfers to these pre-approved destinations.

### Deposit (`client/deposit.html`)
*   *Interface for depositing fiat or crypto assets.*

### Withdraw (`client/withdraw.html`)
*   **Multi-Step Wizard**:
    1.  **Asset Selection**: Search and select the asset to withdraw.
    2.  **Network Selection**: Choose the specific blockchain network (e.g., ERC20 vs TRC20).
    3.  **Details & Confirmation**: Enter amount and select recipient.
*   **Security Controls**:
    *   **Whitelisted Addresses Only**: Users must select a recipient from their approved Address Book.
    *   **2FA Enforcement**: Mandatory Two-Factor Authentication code required for every withdrawal.
    *   **Cancellation Window**: A timed window (e.g., 60 seconds) to cancel a pending request before it is broadcast.
*   **Limits & Governance**:
    *   **Admin-Defined Limits**: Withdrawals are subject to daily and monthly volume limits set by the Administration.
    *   **Approval Workflow**: Large withdrawals (exceeding defined thresholds) automatically trigger a manual review in the Admin Compliance panel.
*   **Fee Calculation**: Real-time estimation of network fees and platform deductions.

### Staking (`client/staking.html`)
*   **Global Stats**:
    *   **Total Value Locked**: Total value of assets currently staked across all protocols.
    *   **Total Rewards Earned**: Cumulative earnings from staking activities.
    *   **Average APY**: Weighted average Annual Percentage Yield of current stakes.
*   **Recent Staking Rewards**: A dedicated table listing recent reward payouts with Date, Asset, Amount, and Value in EUR.
*   **Staking Management**: Interface to stake new assets or unstake existing ones (implied by panel structure).

### Settlement (`client/settlement.html`)
*   *View and manage settlement obligations and history.*

### Security (`client/security.html`)
*   **Account Protection**:
    *   **2FA Management**: Enable/Disable Google Authenticator or hardware keys.
    *   **Password Rotation**: Enforce periodic password changes.
*   **Session Management**:
    *   **Active Sessions**: View and terminate active sessions across different devices.
    *   **Login History**: Audit log of all login attempts with IP address and location data.
*   **Permissions (Managed Accounts)**:
    *   **Role Assignment**: For corporate accounts, the primary owner can assign roles (e.g., "Viewer", "Trader") to other users.
    *   **Access Controls**: Granular permissions for withdrawal initiation vs. approval.

### Profile (`client/profile.html`)
*   **Personal Information**: Manage contact details and preferences.
*   **KYC Status**: View current verification level and upload required documents.
*   **Notification Settings**: Configure email and push notification preferences for different event types (Logins, Trades, Withdrawals).

---

## Admin Panel

### Overview (`admin/admin-overview.html`)
*   **Key Metrics Grid**:
    *   **Total AUM**: Assets Under Management with percentage growth.
    *   **Active Users**: Count of total registered clients.
    *   **Pending KYC**: Number of documents awaiting review (with warning indicator).
    *   **Pending Withdrawals**: Number of withdrawals requiring approval (with alert indicator).
*   **Action Required**: A prioritized list of items needing attention (e.g., New User Registrations, Large Withdrawals).
*   **Recent System Activity**: A log of recent system-wide events (logins, deposits, etc.).

### Clients (`admin/admin-clients.html`)
*   **Client Stats**: Overview of Total Clients, Pending KYB, Pending UBOs, and Rejected applications.
*   **Corporate Client Table**:
    *   **Company Details**: Name, Type (LTD, GmbH, PLC), Country, Registration Number.
    *   **KYB Status**: Visual badges (Verified, In Progress, Action Needed).
    *   **Stakeholder Status**: Quick view of UBO and Director verification progress (e.g., "1/2 Verified").
    *   **Management**: "Manage" button to access full client profile.
*   **Onboarding**: "New Corporate Client" modal to initiate the onboarding process.
*   **Compliance Oversight**:
    *   **Travel Rule Enforcement**: Review and approve whitelisted addresses for corporate clients.
    *   **Limit Overrides**: Set custom withdrawal limits for specific high-volume institutional clients.

### Users (`admin/admin-users.html`)
*   **User Directory**: Searchable list of all individual users (Retail and Corporate linked users).
*   **Access Control**:
    *   **Status Management**: Suspend, Ban, or Activate user accounts.
    *   **Role Assignment**: Assign system roles (Admin, Support, Compliance) or Client roles (Owner, Trader).
*   **Security Audit**: View 2FA status and recent login activity for any user.

### Crypto (`admin/admin-crypto.html`)
*   *Manage supported cryptocurrencies and their settings.*

### Commissions (`admin/admin-commissions.html`)
*   *Configure and view platform commission structures.*

### Settlement (`admin/admin-settlement.html`)
*   *Admin view for settlement operations and reconciliation.*

### Compliance (`admin/admin-compliance.html`)
*   **Compliance Tabs**: Organized workflow for different compliance aspects:
    *   **Companies (KYB)**: Corporate verification.
    *   **Users (KYC)**: Individual user verification.
    *   **Wallets**: Wallet address screening.
    *   **Transaction Screening**: Real-time transaction monitoring.
*   **KYB Module**:
    *   **Filters**: Filter companies by Name, Status (Verified, In Progress, Action Required), and Jurisdiction.
    *   **Verification Checklist**: Detailed status of required documents (Articles of Association, Public Registry, Proof of Address, UBO/Director ID, PEP/Sanctions).
    *   **Risk Scoring**: Visual risk score (Low/Medium/High) for each entity.
*   **KYC Module**:
    *   **User List**: Table of users with Nationality, Tax Residence, and Risk Level.
    *   **SumSub Integration**: Tracks verification steps (Identity Doc, Liveness, PoA, AML Screening).
    *   **Status Tracking**: Approved, Docs Requested, PEP Match.
*   **Actionable Insights**: "Review" and "Details" buttons to dive into specific cases.
