import mongoose, { Schema, Document } from 'mongoose'

export interface JournalEntry extends Document {
    title: string
    content: string
    mood: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
}

const journalEntrySchema = new Schema<JournalEntry>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200
        },
        content: {
            type: String,
            required: true,
            trim: true,
            minlength: 1
        },
        mood: {
            type: String,
            required: true,
            enum: ['happy', 'sad', 'neutral', 'excited', 'anxious', 'calm', 'angry']
        },
        tags: {
            type: [String],
            default: [],
            trim: true
        }
    },
    {
        timestamps: true
    }
)

export const JournalEntryModel =
    mongoose.models.JournalEntry ||
    mongoose.model<JournalEntry>('JournalEntry', journalEntrySchema)
