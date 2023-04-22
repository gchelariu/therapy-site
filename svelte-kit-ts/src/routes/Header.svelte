<script>
  import Logo from "../lib/components/navigation/Logo.svelte";
  import Links from "../lib/components/navigation/Links.svelte";
  // @ts-ignore
  import LinksMobile from "../lib/components/navigation/LinksMobile.svelte";
  import { onMount } from 'svelte';
  import { afterUpdate } from 'svelte';

  let screenWidth = 0;

  // Set the initial value of screenWidth on mount
  onMount(() => {
    screenWidth = window.innerWidth;
  });

  // Update the screenWidth variable on window resize
  afterUpdate(() => {
    const handleResize = () => {
      screenWidth = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div class="navigation">
  {#if screenWidth <= 800}
    <Logo />
    <LinksMobile />
  {:else}
    <Logo />
    <Links />
  {/if}
</div>

<style>
  .navigation {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    padding-top: 10px;
  }
</style>
