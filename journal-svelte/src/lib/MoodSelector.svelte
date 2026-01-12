<script lang="ts">
	import { moods, type MoodType } from './moods';

	interface Props {
		selectedMood: MoodType | null;
		onMoodSelect: (mood: MoodType) => void;
	}

	const { selectedMood, onMoodSelect }: Props = $props();
</script>

<fieldset class="space-y-3 border-0 p-0 m-0">
	<legend class="text-sm text-slate-600 pb-3">How are you feeling today?</legend>
	<div class="grid grid-cols-5 gap-2">
		{#each moods as mood (mood.id)}
			{@const Icon = mood.icon}
			{@const isSelected = selectedMood === mood.id}
			<button
				onclick={() => onMoodSelect(mood.id)}
				class={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${mood.bgColor} ${
					isSelected ? 'border-current scale-105 shadow-md' : 'border-transparent'
				}`}
			>
				<Icon class={`w-6 h-6 ${mood.color}`} />
				<span class={`text-xs ${mood.color}`}>{mood.label}</span>
			</button>
		{/each}
	</div>
</fieldset>
