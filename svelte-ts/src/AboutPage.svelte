<script lang="ts">
  import Navigation from "./lib/Navigation.svelte";
  import AboutMe from "./lib/AboutMe.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Navigation />
  <AboutMe />
  <Footer />
</main>

<style>
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
