<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import MoodSelector from './MoodSelector.svelte';
	import type { MoodType } from './moods';

	interface Props {
		onSubmit: (entry: { mood: MoodType; text: string; date: Date }) => void;
	}

	const { onSubmit }: Props = $props();

	let selectedMood: MoodType | null = $state(null);
	let text = $state('');

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		if (selectedMood && text.trim()) {
			onSubmit({
				mood: selectedMood,
				text: text.trim(),
				date: new Date()
			});
			selectedMood = null;
			text = '';
		}
	};
</script>

<form onsubmit={handleSubmit} class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
	<div class="flex items-center gap-3">
		<div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
			<Plus class="w-5 h-5 text-white" />
		</div>
		<h2 class="text-xl font-semibold text-slate-800">New Entry</h2>
	</div>

	<MoodSelector {selectedMood} onMoodSelect={(mood) => (selectedMood = mood)} />

	<div class="space-y-3">
		<label for="entry-text" class="text-sm text-slate-600">
			What are you grateful for today?
		</label>
		<textarea
			id="entry-text"
			bind:value={text}
			placeholder="I'm grateful for..."
			class="w-full h-32 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:outline-none resize-none transition-colors"
			required
		></textarea>
	</div>

	<button
		type="submit"
		disabled={!selectedMood || !text.trim()}
		class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
	>
		Save Entry
	</button>
</form>
