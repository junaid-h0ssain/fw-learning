<script lang="ts">
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<header class="header-container">
	<nav class="container">
		<ul>
			<li><strong>📔 Gratitude Journal</strong></li>
		</ul>
		<ul>
			<li>{formattedDate}</li>
		</ul>
	</nav>
</header>

<style>
	/* ===== GLOBAL BODY STYLES ===== */
	/* :global() applies styles to the entire page, not just this component */
	:global(body) {
		/* Sets the color of valid form inputs (like green checkmarks) to purple */
		--form-element-valid-border-color: #d946ef;
		/* Sets the color of focused form inputs (like when you click in a text box) to purple */
		--form-element-focus-border-color: #d946ef;
	}

	/* ===== HEADER CONTAINER STYLES ===== */
	.header-container {
		/* Creates a gradient background - starts light gray (top-left) to white (bottom-right) */
		/* 135deg means the angle of the gradient is 135 degrees */
		background: linear-gradient(135deg, #f5f5f5 0%, #f295e1 100%);
		/* Adds a thin gray line at the bottom of the header */
		border-bottom: 1px solid #e0e0e0;
		/* Adds 1rem (16px) padding on top and bottom, 0 on left and right */
		padding: 1rem 0;
	}

	/* ===== GLOBAL NAV STYLES ===== */
	/* Styles the navigation bar that Pico CSS provides */
	:global(nav) {
		/* Changes the color of navigation links to purple */
		--nav-link-color: #d946ef;
	}

	/* ===== NAV BOLD TEXT (TITLE) STYLES ===== */
	/* Targets the <strong> tag inside the <nav> (the "Gratitude Journal" title) */
	:global(nav strong) {
		/* display: flex makes this a flexbox container for arranging items horizontally */
		display: flex;
		/* align-items: center vertically centers items inside the flex container */
		align-items: center;
		/* gap adds space between items inside the flex container (the emoji and text) */
		gap: 1rem;
		/* Increases the text size to 1.25x the normal size */
		font-size: 1.25rem;
		/* Sets the text color to purple */
		color: #d946ef;
	}

	/* ===== NAV DATE STYLES ===== */
	/* Targets the last <li> element in the nav (the date on the right side) */
	:global(nav ul li:last-child) {
		/* Sets the date text color to a muted gray-blue */
		color: #64748b;
		/* Makes the date slightly smaller than normal text */
		font-size: 0.95rem;
	}

	/* ===== MOBILE RESPONSIVE STYLES ===== */
	/* These styles apply on screens smaller than 768px (tablets and phones) */
	@media (max-width: 768px) {
		/* Reduces padding on mobile for more compact header */
		.header-container {
			padding: 0.75rem 0;
		}

		/* Makes the title text smaller on mobile */
		:global(nav strong) {
			font-size: 1.1rem;
			/* Reduces gap between emoji and text on mobile */
			gap: 0.75rem;
		}

		/* Makes date text even smaller and hides it on very small screens */
		:global(nav ul li:last-child) {
			font-size: 0.85rem;
		}
	}

	/* Extra small screens (phones under 480px) */
	@media (max-width: 480px) {
		/* Hides the date completely on very small phones to save space */
		:global(nav ul li:last-child) {
			display: none;
		}

		/* Further reduces title size on very small screens */
		:global(nav strong) {
			font-size: 1rem;
			gap: 0.5rem;
		}
	}
</style>
