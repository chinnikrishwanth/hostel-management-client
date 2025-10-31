# Hostel Management System - Frontend

A modern, responsive web application for comprehensive hostel management built with React, Vite, and Tailwind CSS.

## 🚀 Features

### 🎯 Core Functionality
- **Dual Login System**: Separate interfaces for students and administrators
- **Modern Dashboard**: Interactive dashboards with real-time data visualization
- **Room Management**: Advanced room availability tracking with search and filtering
- **Student Management**: Complete student profile and record management
- **Payment System**: Fee collection and payment tracking
- **Settings Panel**: Comprehensive user preferences and account management

### 🎨 User Interface
- **Pleasant Color Scheme**: Carefully selected color palette for optimal user experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Modern Components**: Beautiful UI components built with Tailwind CSS
- **Accessibility**: WCAG compliant design patterns

### 🔧 Technical Features
- **Real-time Updates**: Live data synchronization
- **Advanced Search**: Multi-criteria search and filtering
- **Data Visualization**: Charts and graphs for analytics
- **Form Validation**: Comprehensive input validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Smooth loading indicators

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hostel-management-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProtectedRoute.jsx
│   └── RoomAvailability.jsx
├── contexts/           # React contexts
│   └── AuthContext.jsx
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── SignUpPage.jsx
│   ├── AdminDashboard.jsx
│   ├── StudentDashboard.jsx
│   └── SettingsPage.jsx
├── services/           # API services
│   └── api.js
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Key Components

### 🏠 Landing Page
- Modern hero section with gradient backgrounds
- Feature showcase with animated cards
- Statistics display
- Call-to-action sections

### 🔐 Authentication
- **Login Page**: Role-based login (Student/Admin)
- **Signup Page**: Account creation with validation
- **Protected Routes**: Secure access control

### 👨‍💼 Admin Dashboard
- **Overview**: Statistics, charts, and recent activity
- **Student Management**: CRUD operations for student records
- **Room Management**: Advanced room availability system
- **Payment Management**: Fee collection and tracking

### 👨‍🎓 Student Dashboard
- **Personal Overview**: Account summary and payment status
- **Payment History**: Transaction records and charts
- **Profile Management**: Personal information and settings
- **Notifications**: System alerts and updates

### ⚙️ Settings Page
- **Profile Settings**: Personal information management
- **Security**: Password change and 2FA options
- **Notifications**: Preference management
- **Appearance**: Theme and language settings
- **System Info**: Account details and system information

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#0ea5e9, #0284c7, #0369a1)
- **Secondary**: Purple tones (#d946ef, #c026d3, #a21caf)
- **Accent**: Green tones (#22c55e, #16a34a, #15803d)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography scaling

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Consistent input styling with validation states
- **Navigation**: Clean tab-based navigation
- **Tables**: Responsive data tables with hover effects

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5002/api
VITE_APP_NAME=Hostel Management System
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations
- Component classes
- Responsive breakpoints

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 User Experience Features

### Animations
- **Page Transitions**: Smooth route changes
- **Component Animations**: Staggered loading animations
- **Hover Effects**: Interactive element feedback
- **Loading States**: Skeleton loaders and spinners

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Clear focus indicators

## 🔒 Security Features

- **Protected Routes**: Role-based access control
- **Input Validation**: Client-side validation
- **XSS Protection**: Sanitized inputs
- **CSRF Protection**: Token-based requests

## 📊 Performance

- **Code Splitting**: Lazy loading of components
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: Responsive images
- **Caching**: Efficient data caching strategies

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0**: Initial release with core functionality
- **v1.1.0**: Added room availability system
- **v1.2.0**: Enhanced UI/UX with animations
- **v1.3.0**: Added comprehensive settings panel

---

Built with ❤️ for modern hostel management needs.
