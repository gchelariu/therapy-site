<script>
  let showMobileMenu = false;

  function toggleMenu() {
    showMobileMenu = !showMobileMenu;
  }
</script>

<div class="links" id="navLinks">
  <div class:showList={showMobileMenu} class:hideList={!showMobileMenu}>
    <!-- <button on:click={toggleMenu}><i class="fa-solid fa-xmark" /></button> -->
    <ul>
      <li>
        <a on:click={toggleMenu} href="#aboutMe"> Despre mine </a>
      </li>
      <li>
        <a on:click={toggleMenu} href="#servicii"> Servicii </a>
      </li>
      <li>
        <a on:click={toggleMenu} href="#contact"> Contact </a>
      </li>
    </ul>
  </div>
  <button on:click={toggleMenu}><i class="fa-solid fa-bars" /></button>
</div>

<style>
  .hideList {
    transform: translate(100%);
    transition: transform 1s ease;
  }

  .showList {
    transform: translateX(0);
    transition: transform 1s ease;
  }

  .links {
    display: flex; /* Use flexbox to center the image horizontally and vertically */
    justify-content: center; /* Center the image horizontally within the div */
    align-items: center;
  }

  .links div {
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    width: 30%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: #d1927f;
  }

  .links button {
    display: block;
    text-decoration: none;
    font-size: 1.2rem;
    background-color: #e3d8cb;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
    transition: 0.75s;
  }

  .links ul li {
    display: flex;
    padding: 0.5rem;
  }

  .links ul li a {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 0.8125rem;
    background-color: #e3d8cb;
    color: black;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
    margin-top: 1.5rem;
  }
</style>
