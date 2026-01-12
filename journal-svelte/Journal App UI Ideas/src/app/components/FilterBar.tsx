import { moods } from "./MoodSelector";
import { MoodType } from "./MoodSelector";
import { X } from "lucide-react";

interface FilterBarProps {
  selectedFilter: MoodType | "all";
  onFilterChange: (filter: MoodType | "all") => void;
}

export function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-center gap-2 overflow-x-auto">
        <span className="text-sm text-slate-600 whitespace-nowrap">Filter:</span>
        <button
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            selectedFilter === "all"
              ? "bg-slate-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          All
        </button>
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = selectedFilter === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => onFilterChange(mood.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isSelected
                  ? `${mood.bgColor} ${mood.color} border-2 border-current`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              {mood.label}
              {isSelected && <X className="w-3 h-3" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
