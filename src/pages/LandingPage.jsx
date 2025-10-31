import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Users, 
  CreditCard, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Student Management",
      description: "Comprehensive student records and profile management"
    },
    {
      icon: <Building2 className="w-8 h-8 text-secondary-600" />,
      title: "Room Management",
      description: "Track room availability and assignments"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-accent-600" />,
      title: "Fee Management",
      description: "Automated fee collection and payment tracking"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Secure Access",
      description: "Role-based access control for students and admins"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Managed" },
    { number: "100+", label: "Rooms Available" },
    { number: "99%", label: "Payment Accuracy" },
    { number: "24/7", label: "System Support" }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Building2 className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">HostelPro</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="btn-primary"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Modern Hostel
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  {" "}Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Streamline your hostel operations with our comprehensive management system. 
                Built for modern hostels with love for efficiency and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link 
                to="/signup" 
                className="btn-primary text-lg px-8 py-3 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/login" 
                className="btn-outline text-lg px-8 py-3"
              >
                Login to Dashboard
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Hostel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make hostel management effortless and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Hostel Management?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of hostels already using our platform to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Started Now</span>
              </Link>
              <Link 
                to="/login" 
                className="btn-secondary text-lg px-8 py-3"
              >
                Login to Continue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold">HostelPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Modern hostel management made simple and efficient.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 HostelPro. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
