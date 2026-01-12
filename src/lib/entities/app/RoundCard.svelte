<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { scenarios, locations, runGame } from '$sharedData';

	let roundResult = $state(null);

	function nextRound() {
		roundResult = runGame(locations, scenarios.medium, 1);
		console.log(roundResult.locations);
	}

	let currentScenario = scenarios.medium;

	// runGame(locations, currentScenario);
</script>

<div class="max-w-2xl">
	<button on:click={nextRound}> Следующий раунд </button>

	{#if roundResult}
		<!-- <GameRoundView {} /> -->

		<!-- {#if roundResult.rareEvent}
		<div class="event rare">
			✨ <strong>Редкое событие</strong>
			<span>{roundResult.rareEvent}</span>
		</div>
	{/if} -->

		{#if roundResult.globalBalance}
			<div class="event balance">
				⚖️ <strong>Глобальный баланс</strong>
				<span>
					{roundResult.globalBalance.totalBefore} → {roundResult.globalBalance.totalAfter}
				</span>
			</div>
		{/if}

		{#if roundResult.locationEvents?.length}
			<div class="event-group">
				<h4>📍 События в локациях</h4>

				{#each roundResult.locationEvents as e}
					<div class="event local">
						<!-- ✨ <strong>{e.locationId}</strong> -->
						<span>{e.eventId}</span>
						<small>(шанс {Math.round(e.chance * 100)}%)</small>
					</div>
				{/each}
			</div>
		{/if}

		<table class="locations">
			<thead>
				<tr>
					<th>#</th>
					<!-- <th>Локация</th> -->
					<th>Ресурсы</th>
				</tr>
			</thead>

			<tbody>
				{#each roundResult.locations as loc (loc.number)}
					<tr class:empty={loc.resources === 0} class:high={loc.resources >= 4}>
						<td>{loc.number}: {loc.title}</td>
						<!-- <td>{loc.locationId}</td> -->
						<td class="resources">{loc.resources}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		font-family: system-ui, sans-serif;
	}

	th,
	td {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid #ddd;
		text-align: left;
	}

	th {
		font-weight: 600;
		background: #f5f5f5;
	}

	.resources {
		font-weight: bold;
		text-align: center;
	}

	tr.empty {
		background: #ffecec;
		color: #900;
	}

	tr.high {
		background: #ecfff0;
		color: #075e2b;
	}
</style>
