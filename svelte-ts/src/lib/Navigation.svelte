<script>
  import Logo from "./components/navigation/Logo.svelte";
  import Links from "./components/navigation/Links.svelte";
  // @ts-ignore
  import LinksMobile from "./components/navigation/LinksMobile.svelte";

  let screenWidth = window.innerWidth;

  // Update the screenWidth variable on window resize
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
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
