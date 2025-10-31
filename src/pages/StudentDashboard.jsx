import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { 
  User, 
  Home, 
  CreditCard, 
  Calendar,
  Bell,
  Settings,
  LogOut,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  Edit,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import toast from 'react-hot-toast'

const StudentDashboard = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [studentData, setStudentData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, City, State',
    roomNumber: 'A101',
    guardianName: 'Robert Doe',
    guardianPhone: '+91 9876543211',
    joiningDate: '2024-01-15',
    monthlyFee: 5000,
    status: 'active'
  })
  const [payments, setPayments] = useState([])
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    // Mock data
    setPayments([
      { id: 1, month: 'January', year: 2024, amount: 5000, status: 'paid', date: '2024-01-15' },
      { id: 2, month: 'February', year: 2024, amount: 5000, status: 'paid', date: '2024-02-15' },
      { id: 3, month: 'March', year: 2024, amount: 5000, status: 'pending', date: '2024-03-15' },
      { id: 4, month: 'April', year: 2024, amount: 5000, status: 'overdue', date: '2024-04-15' },
    ])

    setNotifications([
      { id: 1, title: 'Payment Reminder', message: 'Your March payment is due', type: 'warning', time: '2 hours ago' },
      { id: 2, title: 'Room Maintenance', message: 'Scheduled maintenance in your room tomorrow', type: 'info', time: '1 day ago' },
      { id: 3, title: 'Payment Received', message: 'Your February payment has been processed', type: 'success', time: '3 days ago' },
    ])

    // Mock payment history chart data
    setPaymentHistory([
      { month: 'Jan', amount: 5000, status: 'paid' },
      { month: 'Feb', amount: 5000, status: 'paid' },
      { month: 'Mar', amount: 5000, status: 'pending' },
      { month: 'Apr', amount: 5000, status: 'overdue' },
    ])
  }, [])

  const [paymentHistory, setPaymentHistory] = useState([])

  const stats = [
    { title: 'Monthly Fee', value: `₹${studentData.monthlyFee}`, icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Room Number', value: studentData.roomNumber, icon: Home, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Status', value: studentData.status, icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Member Since', value: '3 months', icon: Calendar, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ]

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
  }

  const handlePayment = (paymentId) => {
    toast.success('Payment processed successfully!')
    // Update payment status
    setPayments(prev => prev.map(p => 
      p.id === paymentId ? { ...p, status: 'paid' } : p
    ))
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Home className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {studentData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{studentData.name}</p>
                  <p className="text-xs text-gray-600">Student</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Payment Status */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Status</h3>
                  <div className="space-y-4">
                    {payments.slice(0, 3).map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{payment.month} {payment.year}</p>
                          <p className="text-sm text-gray-600">₹{payment.amount}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          payment.status === 'paid' 
                            ? 'bg-green-100 text-green-800' 
                            : payment.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={paymentHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" stroke="#0ea5e9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h3>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'success' ? 'bg-green-100' :
                        notification.type === 'warning' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                         notification.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-600" /> :
                         <Bell className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              {/* Payment Actions */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Payment Management</h3>
                <button className="btn-primary flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Make Payment</span>
                </button>
              </div>

              {/* Payments Table */}
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {payment.month} {payment.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{payment.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              payment.status === 'paid' 
                                ? 'bg-green-100 text-green-800' 
                                : payment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {payment.status === 'paid' ? (
                              <div className="flex space-x-2">
                                <button className="text-primary-600 hover:text-primary-900 flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>View</span>
                                </button>
                                <button className="text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                                  <Download className="w-4 h-4" />
                                  <span>Receipt</span>
                                </button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => handlePayment(payment.id)}
                                className="btn-primary text-sm py-1 px-3"
                              >
                                Pay Now
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
                  <button className="btn-outline flex items-center space-x-2">
                    <Edit className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="font-medium text-gray-900">{studentData.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-900">{studentData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium text-gray-900">{studentData.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Room Number</p>
                        <p className="font-medium text-gray-900">{studentData.roomNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Guardian</p>
                        <p className="font-medium text-gray-900">{studentData.guardianName}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Guardian Phone</p>
                        <p className="font-medium text-gray-900">{studentData.guardianPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium text-gray-900">{studentData.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Change Password</p>
                      <p className="text-sm text-gray-600">Update your account password</p>
                    </div>
                    <button className="btn-outline">Change</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Notification Preferences</p>
                      <p className="text-sm text-gray-600">Manage your notification settings</p>
                    </div>
                    <button className="btn-outline">Settings</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                <button className="btn-outline">Mark All Read</button>
              </div>

              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="card hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'success' ? 'bg-green-100' :
                        notification.type === 'warning' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                         notification.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-600" /> :
                         <Bell className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{notification.title}</h4>
                          <span className="text-sm text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default StudentDashboard
