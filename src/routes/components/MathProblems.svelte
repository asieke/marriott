<script lang="ts">
	import { onMount } from 'svelte';

	let num1: number, num2: number, operator: string, sym1: string[], sym2: string[];

	const setProblem = () => {
		let rand = Math.random();

		num1 = Math.floor(Math.random() * 5 + 1);
		num2 = Math.floor(Math.random() * 5 + 1);

		operator = '+';
		//subtraction
		if (rand > 0.5) {
			num1 = num2 + Math.floor(Math.random() * 5);
			operator = '-';
		}

		//create an array of *'s the length of num1
		sym1 = Array(num1).fill('★');
		//create an array of *'s the length of num2
		sym2 = Array(num2).fill('★');

		if (sym1.length > 5) {
			const firstHalf = sym1.slice(0, Math.floor(sym1.length / 2));
			const secondHalf = sym1.slice(Math.floor(sym1.length / 2));
			sym1 = [...firstHalf, '<br>', ...secondHalf];
		}

		if (sym2.length > 5) {
			const firstHalf = sym2.slice(0, Math.floor(sym2.length / 2));
			const secondHalf = sym2.slice(Math.floor(sym2.length / 2));
			sym2 = [...firstHalf, '<br>', ...secondHalf];
		}
	};

	onMount(() => {
		setProblem();
		setInterval(() => {
			setProblem();
		}, 5 * 60 * 100);
	});
</script>

{#if num1 && num2}
	<div class="grid grid-cols-5 align-middle items-center justify-center">
		<div class="variable">
			<span class="text-5xl">{num1}</span>
			<span class="text-center text-blue-800">{@html sym1.join('')}</span>
		</div>
		<div class="symbol">{operator}</div>
		<div class="variable">
			<span class="text-5xl">{num2}</span>
			<span class="text-center text-blue-800">{@html sym2.join('')}</span>
		</div>
		<div class="symbol">=</div>
		<div class="variable">
			<span class="text-5xl">?</span>
		</div>
	</div>
{/if}

<style>
	.variable,
	.symbol {
		@apply h-32 p-1 rounded bg-white text-black w-24 min-h-[50px] flex justify-center items-center font-bold flex-col mx-auto;
	}

	.symbol {
		@apply h-12 w-12 flex items-center align-middle justify-center pb-1 text-5xl  mx-auto;
	}
</style>
