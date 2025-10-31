import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Home, 
  Users, 
  Wifi, 
  Car, 
  Utensils,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  MapPin,
  Calendar
} from 'lucide-react'

const RoomAvailability = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    capacity: 'all',
    amenities: []
  })
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Mock data for demonstration
    setRooms([
      {
        id: 1,
        number: 'A101',
        type: 'Standard',
        capacity: 2,
        occupied: 1,
        status: 'available',
        price: 5000,
        amenities: ['wifi', 'ac', 'furniture'],
        floor: 1,
        building: 'Block A',
        description: 'Comfortable standard room with basic amenities',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-15',
        nextMaintenance: '2024-04-15'
      },
      {
        id: 2,
        number: 'A102',
        type: 'Premium',
        capacity: 1,
        occupied: 1,
        status: 'occupied',
        price: 7500,
        amenities: ['wifi', 'ac', 'furniture', 'tv', 'refrigerator'],
        floor: 1,
        building: 'Block A',
        description: 'Premium room with all modern amenities',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-10',
        nextMaintenance: '2024-04-10'
      },
      {
        id: 3,
        number: 'B201',
        type: 'Standard',
        capacity: 2,
        occupied: 0,
        status: 'available',
        price: 5000,
        amenities: ['wifi', 'ac', 'furniture'],
        floor: 2,
        building: 'Block B',
        description: 'Standard room with good ventilation',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-12',
        nextMaintenance: '2024-04-12'
      },
      {
        id: 4,
        number: 'B202',
        type: 'Deluxe',
        capacity: 1,
        occupied: 0,
        status: 'maintenance',
        price: 10000,
        amenities: ['wifi', 'ac', 'furniture', 'tv', 'refrigerator', 'balcony'],
        floor: 2,
        building: 'Block B',
        description: 'Deluxe room with premium amenities and balcony',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-08',
        nextMaintenance: '2024-03-20'
      },
      {
        id: 5,
        number: 'C301',
        type: 'Standard',
        capacity: 2,
        occupied: 1,
        status: 'available',
        price: 5000,
        amenities: ['wifi', 'ac', 'furniture'],
        floor: 3,
        building: 'Block C',
        description: 'Standard room with city view',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-14',
        nextMaintenance: '2024-04-14'
      },
      {
        id: 6,
        number: 'C302',
        type: 'Premium',
        capacity: 1,
        occupied: 0,
        status: 'available',
        price: 7500,
        amenities: ['wifi', 'ac', 'furniture', 'tv', 'refrigerator'],
        floor: 3,
        building: 'Block C',
        description: 'Premium room with garden view',
        images: ['/api/placeholder/300/200'],
        lastCleaned: '2024-03-16',
        nextMaintenance: '2024-04-16'
      }
    ])
  }, [])

  const amenityIcons = {
    wifi: Wifi,
    ac: Users,
    furniture: Home,
    tv: Star,
    refrigerator: Utensils,
    balcony: MapPin,
    parking: Car
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'occupied':
        return 'bg-red-100 text-red-800'
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="w-4 h-4" />
      case 'occupied':
        return <XCircle className="w-4 h-4" />
      case 'maintenance':
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filters.type === 'all' || room.type.toLowerCase() === filters.type
    const matchesStatus = filters.status === 'all' || room.status === filters.status
    const matchesCapacity = filters.capacity === 'all' || room.capacity.toString() === filters.capacity
    
    const matchesAmenities = filters.amenities.length === 0 || 
                            filters.amenities.every(amenity => room.amenities.includes(amenity))
    
    return matchesSearch && matchesType && matchesStatus && matchesCapacity && matchesAmenities
  })

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'amenities') {
      setFilters(prev => ({
        ...prev,
        amenities: prev.amenities.includes(value)
          ? prev.amenities.filter(a => a !== value)
          : [...prev.amenities, value]
      }))
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }))
    }
  }

  const availableAmenities = ['wifi', 'ac', 'furniture', 'tv', 'refrigerator', 'balcony', 'parking']

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rooms by number, building, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="input-field"
            >
              <option value="all">All Types</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="deluxe">Deluxe</option>
            </select>

            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="input-field"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="maintenance">Maintenance</option>
            </select>

            <select
              value={filters.capacity}
              onChange={(e) => handleFilterChange('capacity', e.target.value)}
              className="input-field"
            >
              <option value="all">All Capacity</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
            </select>
          </div>
        </div>

        {/* Amenities Filter */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
          <div className="flex flex-wrap gap-2">
            {availableAmenities.map((amenity) => {
              const Icon = amenityIcons[amenity]
              return (
                <button
                  key={amenity}
                  onClick={() => handleFilterChange('amenities', amenity)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.amenities.includes(amenity)
                      ? 'bg-primary-100 text-primary-700 border border-primary-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{amenity}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredRooms.length} of {rooms.length} rooms
        </p>
        <div className="flex space-x-2">
          <button className="btn-outline flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            {/* Room Image */}
            <div className="relative mb-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <Home className="w-12 h-12 text-gray-400" />
              </div>
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(room.status)}`}>
                  {getStatusIcon(room.status)}
                  <span className="capitalize">{room.status}</span>
                </span>
              </div>
            </div>

            {/* Room Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Room {room.number}</h3>
                  <p className="text-sm text-gray-600">{room.building} - Floor {room.floor}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-600">₹{room.price}</p>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">{room.description}</p>

              {/* Room Details */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Capacity: {room.capacity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{room.type}</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-1">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity]
                    return (
                      <span
                        key={amenity}
                        className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        <Icon className="w-3 h-3" />
                        <span className="capitalize">{amenity}</span>
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Occupancy Info */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Occupied: {room.occupied}/{room.capacity}</span>
                  <span>Available: {room.capacity - room.occupied}</span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${(room.occupied / room.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Maintenance Info */}
              <div className="pt-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div>
                    <p className="font-medium">Last Cleaned:</p>
                    <p>{new Date(room.lastCleaned).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-medium">Next Maintenance:</p>
                    <p>{new Date(room.nextMaintenance).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex space-x-2">
                {room.status === 'available' ? (
                  <>
                    <button className="flex-1 btn-primary text-sm py-2">
                      Assign Room
                    </button>
                    <button className="btn-outline text-sm py-2">
                      View Details
                    </button>
                  </>
                ) : (
                  <button className="w-full btn-outline text-sm py-2">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredRooms.length === 0 && (
        <div className="text-center py-12">
          <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rooms found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  )
}

export default RoomAvailability
