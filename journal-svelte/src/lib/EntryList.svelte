<script lang="ts">
	import EntryCard from './EntryCard.svelte';
	import { BookHeart } from 'lucide-svelte';
	import type { Entry } from './moods';

	interface Props {
		entries: Entry[];
	}

	const { entries }: Props = $props();
</script>

{#if entries.length === 0}
	<div class="bg-white rounded-2xl shadow-lg p-12 text-center">
		<div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
			<BookHeart class="w-8 h-8 text-purple-500" />
		</div>
		<h3 class="text-lg font-semibold text-slate-700 mb-2">
			No entries yet
		</h3>
		<p class="text-slate-500">
			Start your gratitude journey by creating your first entry above!
		</p>
	</div>
{:else}
	<div class="space-y-4">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-xl font-semibold text-slate-800">
				Your Journal
			</h2>
			<span class="text-sm text-slate-500">
				{entries.length}
				{entries.length === 1 ? 'entry' : 'entries'}
			</span>
		</div>
		<div class="space-y-3">
			{#each entries as entry (entry.id)}
				<EntryCard {entry} />
			{/each}
		</div>
	</div>
{/if}
