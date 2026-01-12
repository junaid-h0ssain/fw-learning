<script lang="ts">
	import { format } from 'date-fns';
	import { moods, type Entry } from './moods';

	interface Props {
		entry: Entry;
	}

	const { entry }: Props = $props();

	const moodConfig = moods.find((m) => m.id === entry.mood);
	const Icon = moodConfig?.icon;
</script>

<div class="bg-white rounded-xl shadow-md p-5 space-y-3 hover:shadow-lg transition-shadow">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-3">
			{#if Icon}
				<div class={`w-10 h-10 rounded-full ${moodConfig.bgColor} flex items-center justify-center border-2`}>
					<Icon class={`w-5 h-5 ${moodConfig.color}`} />
				</div>
			{/if}
			<div>
				<p class={`text-sm font-medium ${moodConfig?.color}`}>
					{moodConfig?.label}
				</p>
				<p class="text-xs text-slate-500">
					{format(entry.date, 'MMMM d, yyyy')}
				</p>
			</div>
		</div>
		<span class="text-xs text-slate-400">
			{format(entry.date, 'h:mm a')}
		</span>
	</div>
	<p class="text-slate-700 leading-relaxed">{entry.text}</p>
</div>
