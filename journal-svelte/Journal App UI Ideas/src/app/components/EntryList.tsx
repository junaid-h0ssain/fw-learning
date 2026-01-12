import { EntryCard } from "./EntryCard";
import { MoodType } from "./MoodSelector";
import { BookHeart } from "lucide-react";

interface Entry {
  id: string;
  mood: MoodType;
  text: string;
  date: Date;
}

interface EntryListProps {
  entries: Entry[];
}

export function EntryList({ entries }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
          <BookHeart className="w-8 h-8 text-purple-500" />
        </div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          No entries yet
        </h3>
        <p className="text-slate-500">
          Start your gratitude journey by creating your first entry above!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">
          Your Journal
        </h2>
        <span className="text-sm text-slate-500">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </span>
      </div>
      <div className="space-y-3">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
