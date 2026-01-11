import { connectDB } from '../../db'
import { JournalEntryModel } from '../../models/journalEntry'

export default defineEventHandler(async (event) => {
  await connectDB()

  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Entry ID is required'
    })
  }

  if (event.node.req.method === 'DELETE') {
    try {
      const entry = await JournalEntryModel.findByIdAndDelete(id)

      if (!entry) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Entry not found'
        })
      }

      return { message: 'Entry deleted successfully' }
    } catch (error) {
      console.error('Error deleting entry:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to delete entry'
      })
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: 'Method not allowed'
  })
})
