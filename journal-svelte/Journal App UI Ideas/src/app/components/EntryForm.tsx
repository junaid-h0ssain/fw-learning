import { useState } from "react";
import { MoodSelector, MoodType } from "./MoodSelector";
import { Plus } from "lucide-react";

interface EntryFormProps {
  onSubmit: (entry: { mood: MoodType; text: string; date: Date }) => void;
}

export function EntryForm({ onSubmit }: EntryFormProps) {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMood && text.trim()) {
      onSubmit({
        mood: selectedMood,
        text: text.trim(),
        date: new Date(),
      });
      setSelectedMood(null);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">New Entry</h2>
      </div>

      <MoodSelector selectedMood={selectedMood} onMoodSelect={setSelectedMood} />

      <div className="space-y-3">
        <label className="text-sm text-slate-600">
          What are you grateful for today?
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="I'm grateful for..."
          className="w-full h-32 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:outline-none resize-none transition-colors"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!selectedMood || !text.trim()}
        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
      >
        Save Entry
      </button>
    </form>
  );
}
