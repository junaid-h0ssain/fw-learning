import { format } from "date-fns";
import { moods } from "./MoodSelector";
import { MoodType } from "./MoodSelector";

interface Entry {
  id: string;
  mood: MoodType;
  text: string;
  date: Date;
}

interface EntryCardProps {
  entry: Entry;
}

export function EntryCard({ entry }: EntryCardProps) {
  const moodConfig = moods.find((m) => m.id === entry.mood);
  const Icon = moodConfig?.icon;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-3 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`w-10 h-10 rounded-full ${moodConfig.bgColor} flex items-center justify-center border-2`}>
              <Icon className={`w-5 h-5 ${moodConfig.color}`} />
            </div>
          )}
          <div>
            <p className={`text-sm font-medium ${moodConfig?.color}`}>
              {moodConfig?.label}
            </p>
            <p className="text-xs text-slate-500">
              {format(entry.date, "MMMM d, yyyy")}
            </p>
          </div>
        </div>
        <span className="text-xs text-slate-400">
          {format(entry.date, "h:mm a")}
        </span>
      </div>
      <p className="text-slate-700 leading-relaxed">{entry.text}</p>
    </div>
  );
}
