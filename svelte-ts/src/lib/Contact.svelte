<div class="contact">
  <div class="title">
    <h2>Contact</h2>
  </div>
  <div class="contact-info-logo">
    <!-- <div class="contact-info">
      <img src="imagini/Logo Transparency file.png" alt="" />
    </div> -->
    <div class="info">
      <p><i class="fa-solid fa-mobile" /> 0730 405 411</p>
      <p>
        <i class="fa-solid fa-envelope" /> contact@psihoterapeut-bucuresti.eu
      </p>
    </div>
  </div>
  <div class="location">
    <p>Bld. Dinicu Golescu, Nr. 35, Sector 1</p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1166.8683610573967!2d26.07352361978506!3d44.44587500172384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e4b47637cf%3A0x4f1cfa79278843cd!2sBulevardul%20Dinicu%20Golescu%2035%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1665301448323!5m2!1sro!2sro"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

<style>
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .title {
    padding: 1rem;
  }

  .title h2 {
    background-color: white;
    color: black;
    text-align: center;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    background-color: #e3d8cb;
    color: black;
    text-align: center;
    font-size: 0.8125rem;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
  }

  .location {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 700px) {
    .location iframe {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .location iframe {
      height: auto;
      width: 100%;
    }
  }
</style>
