<script lang="ts">
    import Navigation from "./lib/Navigation.svelte";
    import Contact from "./lib/components/contact/Contact.svelte";
    import Footer from "./lib/Footer.svelte";
  </script>
  
  <main>
    <Navigation />
    <Contact />
    <Footer />
  </main>
  
  <style>
    main {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
  </style>
  