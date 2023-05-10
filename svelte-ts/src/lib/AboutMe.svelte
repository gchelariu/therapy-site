<script>
  import aboutMe from "../assets/despre-mine.jpg";
</script>

<div class="about">
  <div class="title">
    <h2>Despre mine</h2>
  </div>
  <div class="info">
    <img src={aboutMe} alt="" />
    <div class="descriere">
      <p>
        Bine ați venit pe site-ul meu. Sunt un terapeut licențiat cu peste 2 ani
        de experiență în susținerea persoanelor pentru a depăși provocările
        vieții.
        <br />
        <br />
        Indiferent dacă vă luptați cu anxietatea, depresia, dificultățile de comunicare
        în cadrul relațiilor sau alte situații dificile, sunt aici pentru a vă ajuta.
        <br />
        <br />
      </p>
      <p>
        Consider că fiecare persoană are dreptul la îngrijirea sănătății mentale
        de calitate. Serviciile sunt concepute pentru a satisface nevoile unice
        ale fiecărui client.
        <br />
        <br />
      </p>
      <p>
        Abordarea mea este una caldă, empatică și fără judecată. În ședințele de
        terapie, creez un mediu sigur și de susținere în care clienții își pot
        explora gândurile și sentimentele fără frica de judecată.
        <br />
        <br />
      </p>
      <p>
        Oricând vă simțiți pregătiți sa faceți primul pas spre vindecare și
        creștere, vă invit să ne cunoaștem.
      </p>
    </div>
  </div>
</div>

<style>
  .about {
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
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    border-radius: 75px;
    padding: 10px;
    margin: 50px;
    height: 40rem;
    width: auto;
  }

  .descriere {
    text-indent: 20px;
    text-align: justify;
    border-radius: 75px;
    padding: 30px;
    background-color: #e3d8cb;
    width: 25rem;
    height: auto;
  }

  @media (max-width: 1100px) {
    img {
      width: 40%;
      height: auto;
    }

    .descriere {
      margin-right: 30px;
      width: 40%;
    }
  }

  @media (max-width: 1020px) {
    .info {
      flex-direction: column;
    }

    img {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .descriere {
      margin-right: 0px;
      width: 80%;
      height: auto;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 305px;
      height: auto;
    }
  }

  @media (max-width: 425px) {
    img {
      margin: 0;
    }

    .descriere {
      width: 80%;
    }
  }

  @media (max-width: 305px) {
    img {
      width: 90%;
      height: auto;
    }
  }
</style>
