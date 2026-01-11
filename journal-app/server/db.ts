import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    return
  }

  try {
    const mongoUri = process.env.MONGODB_URI

    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not set')
    }

    await mongoose.connect(mongoUri)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}
