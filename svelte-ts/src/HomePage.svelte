<script>
  import Navigation from "./lib/Navigation.svelte";
  import Cards from "./lib/Cards.svelte";
  import Servicii from "./lib/Servicii.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Navigation />
  <Cards />
  <Servicii />
  <Footer />
</main>

<style>
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
