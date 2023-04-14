<script>
  import Logo from './components/navigation/Logo.svelte';
  import Links from './components/navigation/Links.svelte';
</script>

<div class="navigation">  
  <Logo/>
  <Links/>
</div>

<style>
  .navigation {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    padding-top: 10px;
  }
</style>
