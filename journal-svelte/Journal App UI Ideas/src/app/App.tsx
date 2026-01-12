import { useState } from "react";
import { EntryForm } from "./components/EntryForm";
import { EntryList } from "./components/EntryList";
import { FilterBar } from "./components/FilterBar";
import { MoodType } from "./components/MoodSelector";
import { BookHeart, Sparkles } from "lucide-react";
import { format } from "date-fns";

interface Entry {
  id: string;
  mood: MoodType;
  text: string;
  date: Date;
}

export default function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filter, setFilter] = useState<MoodType | "all">("all");

  const handleAddEntry = (entry: { mood: MoodType; text: string; date: Date }) => {
    const newEntry: Entry = {
      id: crypto.randomUUID(),
      ...entry,
    };
    setEntries([newEntry, ...entries]);
  };

  const filteredEntries = entries.filter((entry) =>
    filter === "all" ? true : entry.mood === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <BookHeart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gratitude Journal
                </h1>
                <p className="text-sm text-slate-500">Reflect & Appreciate</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">{format(new Date(), "EEEE")}</p>
              <p className="text-xs text-slate-500">{format(new Date(), "MMMM d, yyyy")}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg italic mb-2">
                "Gratitude turns what we have into enough."
              </p>
              <p className="text-sm opacity-90">— Melody Beattie</p>
            </div>
          </div>
        </div>

        {/* Entry Form */}
        <EntryForm onSubmit={handleAddEntry} />

        {/* Filter Bar */}
        {entries.length > 0 && (
          <FilterBar selectedFilter={filter} onFilterChange={setFilter} />
        )}

        {/* Entry List */}
        <EntryList entries={filteredEntries} />
      </main>
    </div>
  );
}
