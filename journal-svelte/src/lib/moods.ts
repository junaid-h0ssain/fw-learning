import { Smile, Heart, Sparkles, CloudRain, Zap } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type MoodType = 'happy' | 'grateful' | 'calm' | 'sad' | 'anxious';

export interface MoodOption {
	id: MoodType;
	label: string;
	icon: ComponentType;
	color: string;
	bgColor: string;
}

export const moods: MoodOption[] = [
	{
		id: 'happy',
		label: 'Happy',
		icon: Smile,
		color: 'text-yellow-600',
		bgColor: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200'
	},
	{
		id: 'grateful',
		label: 'Grateful',
		icon: Heart,
		color: 'text-pink-600',
		bgColor: 'bg-pink-50 hover:bg-pink-100 border-pink-200'
	},
	{
		id: 'calm',
		label: 'Calm',
		icon: Sparkles,
		color: 'text-blue-600',
		bgColor: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
	},
	{
		id: 'sad',
		label: 'Sad',
		icon: CloudRain,
		color: 'text-slate-600',
		bgColor: 'bg-slate-50 hover:bg-slate-100 border-slate-200'
	},
	{
		id: 'anxious',
		label: 'Anxious',
		icon: Zap,
		color: 'text-purple-600',
		bgColor: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
	}
];

export interface Entry {
	id: string;
	mood: MoodType;
	text: string;
	date: Date;
}
