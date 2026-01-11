import { connectDB } from '../db'
import { JournalEntryModel } from '../models/journalEntry'

export default defineEventHandler(async (event) => {
    await connectDB()

    if (event.node.req.method === 'GET') {
        try {
            const entries = await JournalEntryModel.find()
                .sort({ createdAt: -1 })
                .lean()

            return entries
        } catch (error) {
            console.error('Error fetching entries:', error)
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to fetch entries'
            })
        }
    }

    if (event.node.req.method === 'POST') {
        try {
            const body = await readBody(event)

            if (!body.title || !body.content || !body.mood) {
                throw createError({
                    statusCode: 400,
                    statusMessage: 'Missing required fields: title, content, mood'
                })
            }

            const entry = new JournalEntryModel({
                title: body.title,
                content: body.content,
                mood: body.mood,
                tags: body.tags || []
            })

            const savedEntry = await entry.save()
            return savedEntry
        } catch (error) {
            console.error('Error creating entry:', error)
            if (error instanceof Error && error.message.includes('required')) {
                throw createError({
                    statusCode: 400,
                    statusMessage: error.message
                })
            }
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to create entry'
            })
        }
    }

    throw createError({
        statusCode: 405,
        statusMessage: 'Method not allowed'
    })
})
