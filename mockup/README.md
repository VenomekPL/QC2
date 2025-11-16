# QCrypto Platform - UI/UX Mockup

A comprehensive HTML + CSS mockup application visualizing the UI/UX flow for the QCrypto digital asset platform.

## Project Structure

```
mockup/
├── index.html                      # Landing page
├── login.html                      # Login page
├── register.html                   # Registration page
├── assets/
│   ├── css/
│   │   ├── reset.css              # CSS reset & normalization
│   │   ├── variables.css          # Design system variables
│   │   ├── global.css             # Global styles & components (updated button contrast)
│   │   └── layout.css             # Layout components (sidebar, topbar, etc.)
│   └── js/
│       └── app.js                 # Application logic, role switching, authentication
├── pages/
│   ├── client/                    # Client Panel pages
│   │   ├── dashboard.html         # Client dashboard (updated balances, removed search)
│   │   ├── wallets.html           # Multi-currency wallet management (30-day chart, QR codes planned)
│   │   ├── transactions.html      # Transaction history (search bar retained)
│   │   ├── deposit.html           # Deposit interface
│   │   ├── withdraw.html          # Withdrawal interface
│   │   ├── staking.html           # Multi-token staking (ETH, AVAX, MATIC)
│   │   ├── security.html          # Security settings
│   │   └── profile.html           # User profile
│   ├── admin/                     # Q Securities Admin pages
│   │   └── q-admin-dashboard.html # System admin dashboard
│   └── aifm/                      # AIFM Platform pages
│       ├── aifm-dashboard.html    # AIFM admin dashboard
│       ├── fund-manager-dashboard.html  # Fund management
│       ├── trader-dashboard.html  # Trading workstation
│       ├── middle-office-dashboard.html # Operations dashboard
│       └── depositary-dashboard.html    # Custody oversight
├── README.md
├── UI_IMPROVEMENTS_SUMMARY.md     # Detailed change log (November 13, 2025)
├── QSECURITIES_BRANDING_APPLIED.md # QSecurities branding integration (fonts, colors, typography)
├── WALLET_UPDATE_SUMMARY.md       # Multi-currency wallet architecture
└── IMPLEMENTATION_COMPLETE.md     # Phase 1 completion summary
```

## Design System

### QSecurities Branding (November 13, 2025)
Platform now matches QSecurities.com visual identity:

**Typography**:
- **Fonts**: Poppins + Open Sans (Google Fonts)
- **Body Size**: 14px (medium weight 500, line-height 1.7em)
- **Headings**: 30/26/22/18/16/14px (medium weight 500, line-height 1em)
- **Font Smoothing**: Antialiased for retina displays

**Color Palette**:
- **Primary**: #34276b (Dark Purple - brand identity)
- **Secondary**: #2ea3f2 (Bright Blue - links, buttons, CTAs)
- **Text Primary**: #34276b (Purple - headings)
- **Text Secondary**: #666666 (Gray - body text)
- **Text Tertiary**: #999999 (Light Gray - meta text)

**Design Language**:
- Professional, modern typography
- Dark purple + bright blue theme
- Medium font weight (500) as standard
- Generous line-height for readability (1.7em)

See `QSECURITIES_BRANDING_APPLIED.md` for complete details.

### Legacy Colors (Reference)
- **Accent**: #FF6B35 (Orange)
- **Success**: #66BB6A
- **Warning**: #FFA726
- **Danger**: #EF5350
- **Info**: #29B6F6

### Typography
- **Font Family**: System fonts (-apple-system, Segoe UI, Roboto, etc.)
- **Font Sizes**: 12px (xs) to 36px (4xl)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing Scale
- Uses 4px base unit (0.25rem increments)
- Ranges from 4px (space-1) to 64px (space-16)

### Layout Dimensions
- **Sidebar Width**: 260px (collapsed: 64px)
- **Topbar Height**: 64px
- **Max Content Width**: 1440px

## Pages Overview

### Public Pages
1. **Landing Page** (`index.html`)
   - Hero section with call-to-action
   - Feature showcase
   - Navigation to login/register

2. **Login** (`login.html`)
   - Email/password authentication
   - Social login options (Google, Microsoft)
   - Remember me & forgot password

3. **Register** (`register.html`)
   - Multi-step registration form
   - Terms & conditions acceptance
   - Social registration options

### Client Panel Pages
Located in `pages/client/`

1. **Dashboard** (`dashboard.html`)
   - Four balance cards: Total Balance (€187,456.75), Fiat Balance (€0), Crypto Assets (€186,966.75), Locked in Staking (€13,478.40)
   - Portfolio distribution chart
   - Recent activity feed
   - Quick actions with gradient icon cards: Deposit (blue), Withdraw (green), Stake (orange), Security (gray)
   - Search bar removed (not needed for dashboard)

2. **Wallets** (`wallets.html`)
   - Total portfolio value: €187,456.75
   - 30-day portfolio value line graph (SVG-based smooth trend visualization)
   - Multi-currency support: Bitcoin, Ethereum, Avalanche, Polygon
   - Multi-account architecture per currency
   - Dynamic account creation (generates unique addresses)
   - Per-account actions: Deposit, Withdraw, Copy Address
   - Stake buttons on main accounts for ETH, AVAX, MATIC (orange gradient, redirects to staking)
   - QR code generation (planned feature)
   - Search bar removed

3. **Transactions** (`transactions.html`)
   - Transaction history with search and filtering
   - Search bar retained (useful for finding specific transactions)
   - Filter by account, currency, type, date range

4. **Staking** (`staking.html`)
   - Multi-token staking: Ethereum (Native PoS), Avalanche (Delegated), Polygon (Delegated)
   - Real-world staking mechanics per token:
     - **ETH**: Native staking, 0.01 ETH minimum (pooled), ~4% APY, 1-5 day unstaking
     - **AVAX**: Delegated to validators, 25 AVAX minimum, 2 weeks to 1 year duration (7.5-10% APY), immediate after lock period
     - **MATIC**: Delegated to validators, 1 MATIC minimum, ~5-6% APY, 80 checkpoints (~3-4 days) unbonding
   - Separate staking frames per token showing:
     - Currently staked amount
     - Est. annual return (APY)
     - Rewards earned (lifetime)
   - Collapsible staking panels with token-specific parameters
   - Token-specific unstaking periods and warnings
   - Only main wallet accounts can stake
   - Search bar removed

5. **Navigation - Unified Structure (All Pages)**
   - **Client** section:
     - Dashboard, Wallets, Transactions, Deposit, Withdraw, Staking (all in one section)
   - **AIFM** section:
     - AIFM Dashboard, Fund Manager, Trader
   - **Operations** section:
     - Middle Office, Depositary
   - **Admin** section:
     - Q-Admin
   - **Settings** section:
     - Security, Profile
   - Role visibility: All categories visible in mockup; in production, visibility determined by user permissions

### AIFM Platform Pages
Located in `pages/aifm/` and `pages/admin/`

1. **Q-Admin Dashboard** (`pages/admin/q-admin-dashboard.html`)
   - System-wide overview: AUM, clients, uptime, daily volume
   - Liquidity management (hot/cold wallet split)
   - System health monitoring
   - Client management (B2B AIFM onboarding)

2. **AIFM Admin Dashboard** (`aifm-dashboard.html`)
   - Multi-fund overview
   - Total AUM metrics
   - Active funds count
   - Investor statistics
   - Top performing funds table
   - Recent investor activity
   - Compliance status

3. **Fund Manager Dashboard** (`fund-manager-dashboard.html`)
   - Fund-specific portfolio management
   - NAV and investor count
   - YTD return vs benchmark
   - Portfolio allocation display
   - Recent activity (subscriptions, trades, rebalancing)
   - Pending actions tracker

4. **Trader Workstation** (`trader-dashboard.html`)
   - Real-time market ticker
   - Price chart (candlestick)
   - Order book display
   - Recent trades feed
   - Order entry panel (Market/Limit/OTC)
   - Active orders list
   - Risk metrics display

5. **Middle Office Dashboard** (`middle-office-dashboard.html`)
   - Pending settlements tracker
   - Reconciliation items
   - Risk alerts (VaR, concentration)
   - Compliance checks pass rate
   - Risk monitoring with progress bars

6. **Depositary Dashboard** (`depositary-dashboard.html`)
   - Assets under custody overview
   - Pending transaction authorizations
   - Reconciliation status (100% matched target)
   - Compliance alerts
   - Assets by fund breakdown

## Key Features

### UI/UX Improvements (November 13, 2025)
- **Button Contrast**: Fixed `.btn-secondary` from near-invisible gray-200 to readable gray-600 with white text
- **Search Bar Optimization**: Removed from dashboard, wallets, staking; retained only in transactions page
- **Dashboard Balance Cards**: 4-card layout showing Total (€187,456.75), Fiat (€0), Crypto (€186,966.75), and Staking (€13,478.40) balances
- **Dashboard Quick Actions**: Redesigned with gradient icon cards and hover effects (lift animation, border glow, shadow)
- **30-Day Portfolio Chart**: SVG line graph in wallets page showing smooth trend from ~€161K to €187K
- **Multi-Token Staking**: Expanded from ETH-only to ETH + AVAX + MATIC with real-world staking mechanics
  - Ethereum: Native PoS staking (0.01 ETH min, ~4% APY, 1-5 day unstaking)
  - Avalanche: Delegated staking (25 AVAX min, flexible duration 2 weeks-1 year, 7.5-10% APY)
  - Polygon: Delegated staking (1 MATIC min, ~5-6% APY, 80 checkpoint unbonding)
- **Collapsible Staking Panels**: Per-token staking forms with token-specific parameters and duration selectors
- **Token-Specific Unstaking**: Individual unstaking periods per cryptocurrency (replaced generic 72-hour warning)
- **Stake Buttons in Wallets**: Added orange gradient "⚡ Stake" buttons to main accounts for ETH, AVAX, MATIC
- **Unified Navigation Structure**: Integrated all role-based pages directly into main sidebar navigation
  - Client section (Dashboard, Wallets, Transactions, Deposit, Withdraw, Staking)
  - AIFM section (AIFM Dashboard, Fund Manager, Trader)
  - Operations section (Middle Office, Depositary)
  - Admin section (Q-Admin)
  - Settings section (Security, Profile)
- **Navigation Consistency**: Applied unified navigation structure across all 8 client pages
- **Sidebar Logo Alignment**: Fixed logo height to 64px to align perfectly with topbar divider (cross-division alignment)
- **QR Code Generation**: Planned feature for deposit addresses (next phase)

### Navigation
- **Sidebar Navigation**: Fixed sidebar with icon + text menu items organized by sections
- **Top Bar**: Notifications, user menu (search removed from most pages)
- **Breadcrumbs**: Context-aware page location
- **Active States**: Visual indication of current page
- **Role Switching**: Multi-role users can switch between dashboards

### Components
- **Cards**: Rounded containers with shadows
- **Tables**: Responsive data tables with hover states
- **Buttons**: Multiple variants (primary, secondary, outline, sizes)
- **Forms**: Styled inputs, labels, validation states
- **Badges**: Status indicators (success, warning, danger, info)
- **Alerts**: Contextual alert messages
- **Stat Cards**: Metric display with change indicators

### Responsive Design
- **Desktop** (>1024px): Full layout with sidebar
- **Tablet** (768-1024px): Collapsible sidebar
- **Mobile** (<768px): Hamburger menu, single column

## Color Coding Guide

### User Roles
Each user type has distinct UI elements and navigation:
- **Client Panel**: Focus on portfolio management and transactions
- **AIFM Admin**: Multi-fund oversight and investor management
- **Trader**: Real-time market data and order execution

### Status Indicators
- **Green/Success**: Completed, active, positive change
- **Yellow/Warning**: Pending, attention needed
- **Red/Danger**: Failed, error, negative change
- **Blue/Info**: Informational, staking, special status

## Usage Instructions

### Viewing the Mockup
1. Open `index.html` in a web browser to view the landing page
2. Navigate to different pages using links
3. Client Panel: `pages/client/dashboard.html`
4. AIFM Platform: `pages/aifm/aifm-dashboard.html`
5. Trading: `pages/aifm/trader-dashboard.html`

### Customization
1. **Colors**: Edit `assets/css/variables.css` to change the color scheme
2. **Typography**: Modify font variables in `variables.css`
3. **Layout**: Adjust layout dimensions in `variables.css`
4. **Components**: Extend `global.css` for new component styles

### Adding React Components
Per project guidelines, React should be used minimally:
1. Identify small visual elements that benefit from React
2. Source components from https://reactbits.dev/
3. Document which components are from React Bits
4. Keep components simple and focused

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox support required
- CSS Custom Properties (variables) support required

## Future Enhancements

### Phase 1 (Current - November 13, 2025)
- [x] Landing and authentication pages
- [x] Client Panel (Dashboard, Wallets, Transactions, Staking)
- [x] Multi-currency wallet support (BTC, ETH, AVAX, MATIC)
- [x] Multi-account architecture per currency
- [x] 30-day portfolio value chart
- [x] Multi-token staking (ETH, AVAX, MATIC)
- [x] AIFM Admin Dashboard
- [x] Fund Manager Dashboard
- [x] Trader Workstation
- [x] Middle Office Dashboard
- [x] Depositary Dashboard
- [x] Q-Admin Dashboard
- [x] Multi-role navigation system
- [x] Button contrast improvements

### Phase 2 (Planned)
- [ ] QR code generation for deposit addresses
- [ ] Account selector in withdrawal form
- [ ] Interactive charts (Chart.js integration)
- [ ] Form validation and error handling
- [ ] Additional client pages (full feature set)
- [ ] Additional AIFM pages (Strategies, Investors, Performance, Compliance)
- [ ] Modal dialogs for confirmations
- [ ] Role-based permission enforcement

### Phase 3 (Enhancement)
- [ ] Interactive React components from React Bits
- [ ] Real-time data updates (WebSocket simulation)
- [ ] Advanced filtering and search
- [ ] Responsive mobile navigation
- [ ] Dark mode theme
- [ ] Export functionality (CSV, PDF)
- [ ] Notification center
- [ ] User preferences persistence

## Reference Documents
- **Guidelines**: `../copilot/guideline.md`
- **Project Specs**: `../copilot/project.md`
- **Sitemap**: `../copilot/sitemap.md`

## Notes
- This is a **mockup/prototype** - not production code
- Focus is on UI/UX flow visualization
- Static data is used for demonstration
- Charts are placeholders (to be replaced with actual charting library)
- Forms are non-functional (no backend integration)

## Development Guidelines
1. Use semantic HTML5 elements
2. Keep CSS modular and reusable
3. Follow mobile-first responsive approach
4. Maintain consistent naming conventions
5. Comment major sections
6. Test across different screen sizes

---

**Version**: 1.0  
**Created**: November 13, 2025  
**Developer**: 3S Game Studio OU  
**Client**: Q Securities SA
