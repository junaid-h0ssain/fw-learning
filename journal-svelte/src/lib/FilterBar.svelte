<script lang="ts">
	import { moods, type MoodType } from './moods';
	import { X } from 'lucide-svelte';

	interface Props {
		selectedFilter: MoodType | 'all';
		onFilterChange: (filter: MoodType | 'all') => void;
	}

	const { selectedFilter, onFilterChange }: Props = $props();
</script>

<div class="bg-white rounded-xl shadow-md p-4">
	<div class="flex items-center gap-2 overflow-x-auto">
		<span class="text-sm text-slate-600 whitespace-nowrap">Filter:</span>
		<button
			onclick={() => onFilterChange('all')}
			class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
				selectedFilter === 'all'
					? 'bg-slate-800 text-white'
					: 'bg-slate-100 text-slate-600 hover:bg-slate-200'
			}`}
		>
			All
		</button>
		{#each moods as mood (mood.id)}
			{@const Icon = mood.icon}
			{@const isSelected = selectedFilter === mood.id}
			<button
				onclick={() => onFilterChange(mood.id)}
				class={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
					isSelected
						? `${mood.bgColor} ${mood.color} border-2 border-current`
						: 'bg-slate-100 text-slate-600 hover:bg-slate-200'
				}`}
			>
				<Icon class="w-4 h-4" />
				{mood.label}
				{#if isSelected}
					<X class="w-3 h-3" />
				{/if}
			</button>
		{/each}
	</div>
</div>
