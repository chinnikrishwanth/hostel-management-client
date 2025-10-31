import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { 
  Users, 
  Building2, 
  CreditCard, 
  TrendingUp, 
  Search,
  Plus,
  Filter,
  Download,
  Bell,
  Settings,
  LogOut,
  User,
  Calendar,
  DollarSign,
  Home,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import RoomAvailability from '../components/RoomAvailability'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [students, setStudents] = useState([])
  const [rooms, setRooms] = useState([])
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock data for demonstration
  useEffect(() => {
    // Simulate loading data
    setStudents([
      { id: 1, name: 'John Doe', email: 'john@example.com', roomNumber: 'A101', status: 'active', monthlyFee: 5000, joiningDate: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', roomNumber: 'A102', status: 'active', monthlyFee: 5000, joiningDate: '2024-01-20' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', roomNumber: 'B201', status: 'inactive', monthlyFee: 5000, joiningDate: '2024-02-01' },
      { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', roomNumber: 'B202', status: 'active', monthlyFee: 5000, joiningDate: '2024-02-10' },
    ])

    setRooms([
      { id: 1, number: 'A101', capacity: 2, occupied: 1, status: 'available', type: 'Standard' },
      { id: 2, number: 'A102', capacity: 2, occupied: 1, status: 'occupied', type: 'Standard' },
      { id: 3, number: 'B201', capacity: 1, occupied: 0, status: 'available', type: 'Premium' },
      { id: 4, number: 'B202', capacity: 1, occupied: 1, status: 'occupied', type: 'Premium' },
    ])

    setPayments([
      { id: 1, studentName: 'John Doe', amount: 5000, month: 'March', year: 2024, status: 'paid', date: '2024-03-01' },
      { id: 2, studentName: 'Jane Smith', amount: 5000, month: 'March', year: 2024, status: 'pending', date: '2024-03-05' },
      { id: 3, studentName: 'Mike Johnson', amount: 5000, month: 'March', year: 2024, status: 'paid', date: '2024-03-02' },
    ])
  }, [])

  const stats = [
    { title: 'Total Students', value: students.length, icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Active Students', value: students.filter(s => s.status === 'active').length, icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Total Rooms', value: rooms.length, icon: Building2, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { title: 'Available Rooms', value: rooms.filter(r => r.status === 'available').length, icon: Home, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { title: 'Monthly Revenue', value: '₹25,000', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Pending Payments', value: payments.filter(p => p.status === 'pending').length, icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-100' },
  ]

  const chartData = [
    { name: 'Jan', students: 12, revenue: 60000 },
    { name: 'Feb', students: 15, revenue: 75000 },
    { name: 'Mar', students: 18, revenue: 90000 },
    { name: 'Apr', students: 20, revenue: 100000 },
  ]

  const roomStatusData = [
    { name: 'Occupied', value: rooms.filter(r => r.status === 'occupied').length, color: '#ef4444' },
    { name: 'Available', value: rooms.filter(r => r.status === 'available').length, color: '#22c55e' },
  ]

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roomNumber.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'rooms', label: 'Rooms', icon: Building2 },
    { id: 'payments', label: 'Payments', icon: CreditCard },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hostel Management</h1>
                <p className="text-sm text-gray-600">Administrator Dashboard</p>
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
                  <p className="text-sm font-medium text-gray-900">{user?.fullName}</p>
                  <p className="text-xs text-gray-600">Administrator</p>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8"
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
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Growth</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Status</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={roomStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {roomStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: 'New student registered', user: 'John Doe', time: '2 hours ago', type: 'success' },
                    { action: 'Payment received', user: 'Jane Smith', time: '4 hours ago', type: 'success' },
                    { action: 'Room assignment updated', user: 'Mike Johnson', time: '6 hours ago', type: 'info' },
                    { action: 'Payment overdue', user: 'Sarah Wilson', time: '1 day ago', type: 'warning' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-100' :
                        activity.type === 'warning' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        {activity.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                         activity.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-600" /> :
                         <Clock className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              {/* Search and Actions */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>
                <div className="flex space-x-3">
                  <button className="btn-outline flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="btn-outline flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Student</span>
                  </button>
                </div>
              </div>

              {/* Students Table */}
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Fee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredStudents.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-primary-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                <div className="text-sm text-gray-500">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.roomNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              student.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{student.monthlyFee}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.joiningDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rooms' && (
            <div className="space-y-6">
              {/* Room Management Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Room Management</h3>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Room</span>
                </button>
              </div>

              {/* Room Availability Component */}
              <RoomAvailability />
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              {/* Payment Management */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Payment Management</h3>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Record Payment</span>
                </button>
              </div>

              {/* Payments Table */}
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.studentName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{payment.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.month} {payment.year}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              payment.status === 'paid' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard
