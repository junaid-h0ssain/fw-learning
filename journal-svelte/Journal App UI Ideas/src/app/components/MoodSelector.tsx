import { Smile, Heart, Sparkles, CloudRain, Zap } from "lucide-react";

export type MoodType = "happy" | "grateful" | "calm" | "sad" | "anxious";

interface MoodOption {
  id: MoodType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const moods: MoodOption[] = [
  {
    id: "happy",
    label: "Happy",
    icon: Smile,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
  },
  {
    id: "grateful",
    label: "Grateful",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50 hover:bg-pink-100 border-pink-200",
  },
  {
    id: "calm",
    label: "Calm",
    icon: Sparkles,
    color: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100 border-blue-200",
  },
  {
    id: "sad",
    label: "Sad",
    icon: CloudRain,
    color: "text-slate-600",
    bgColor: "bg-slate-50 hover:bg-slate-100 border-slate-200",
  },
  {
    id: "anxious",
    label: "Anxious",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50 hover:bg-purple-100 border-purple-200",
  },
];

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onMoodSelect: (mood: MoodType) => void;
}

export function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm text-slate-600">How are you feeling today?</label>
      <div className="grid grid-cols-5 gap-2">
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => onMoodSelect(mood.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                mood.bgColor
              } ${
                isSelected
                  ? "border-current scale-105 shadow-md"
                  : "border-transparent"
              }`}
            >
              <Icon className={`w-6 h-6 ${mood.color}`} />
              <span className={`text-xs ${mood.color}`}>{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { moods };
