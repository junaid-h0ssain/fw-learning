<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { format } from 'date-fns';
	import EntryForm from '$lib/EntryForm.svelte';
	import EntryList from '$lib/EntryList.svelte';
	import FilterBar from '$lib/FilterBar.svelte';
	import { BookHeart, Sparkles } from 'lucide-svelte';
	import type { Entry, MoodType } from '$lib/moods';

	let entries: Entry[] = $state([]);
	let filter: MoodType | 'all' = $state('all');

	const handleAddEntry = (entry: { mood: MoodType; text: string; date: Date }) => {
		const newEntry: Entry = {
			id: uuidv4(),
			...entry
		};
		entries = [newEntry, ...entries];
	};

	const filteredEntries = $derived(
		entries.filter((entry) =>
			filter === 'all' ? true : entry.mood === filter
		)
	);
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
	<!-- Header -->
	<header class="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
		<div class="max-w-4xl mx-auto px-4 py-6">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
						<BookHeart class="w-7 h-7 text-white" />
					</div>
					<div>
						<h1 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Gratitude Journal
						</h1>
						<p class="text-sm text-slate-500">Reflect & Appreciate</p>
					</div>
				</div>
				<div class="text-right">
					<p class="text-sm text-slate-600">{format(new Date(), 'EEEE')}</p>
					<p class="text-xs text-slate-500">{format(new Date(), 'MMMM d, yyyy')}</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="max-w-4xl mx-auto px-4 py-8 space-y-6">
		<!-- Inspirational Quote -->
		<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
			<div class="flex items-start gap-3">
				<Sparkles class="w-6 h-6 flex-shrink-0 mt-1" />
				<div>
					<p class="text-lg italic mb-2">
						"Gratitude turns what we have into enough."
					</p>
					<p class="text-sm opacity-90">— Melody Beattie</p>
				</div>
			</div>
		</div>

		<!-- Entry Form -->
		<EntryForm onSubmit={handleAddEntry} />

		<!-- Filter Bar -->
		{#if entries.length > 0}
			<FilterBar selectedFilter={filter} onFilterChange={(f) => (filter = f)} />
		{/if}

		<!-- Entry List -->
		<EntryList entries={filteredEntries} />
	</main>
</div>
