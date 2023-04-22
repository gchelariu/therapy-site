<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Home from './HomePage.svelte';
  import About from './AboutPage.svelte';
  import Contact from './ContactPage.svelte';
</script>

<Router>
  <Route component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Router>
