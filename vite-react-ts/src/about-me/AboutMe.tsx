import aboutMe from "../assets/despre-mine.png";

function AboutMe() {
  return (
    <div className="aboutMe">
      {/* <img src={aboutMe} alt="" /> */}
      <div className="aboutMe-text">
        <h1>Despre mine</h1>
        <p>
          Buna!
          <br />
          Numele meu este Andreea Fischer. Plăcerea și interesul pentru
          psihologie au început in jurul vârstei de 15 ani, atunci când au avut
          loc mai multe schimbări in viața mea si momente mai putin placute,
          însă, cu toate acestea, o perioada productiva, o perioada in care m-am
          cunoscut mai bine pe mine, oamenii din jurul meu și totodata, nevoile
          și dorințele mele.
          <br />
          Ma consider o persoana perseverenta, empatica, grijulie si mereu
          atenta la nevoile clientilor mei. Din cauza ritmului alert in care se
          desfasoara viata de zi cu zi si a rapiditatii dezvoltarii societatii
          moderne, suntem lasati de cele mai multe ori cu sentimentul ca nu-i
          putem face fata si suntem complesiti de circumstante.
          <br />
          Unul dintre citatele mele preferate este cel al Annei Freud:
          <i>
            ,,Mereu mi-am căutat forța și încredere in afara mea, dar vine din
            interior. Este acolo tot timpul”
          </i>
          . Astfel, îmi doresc sa fiu alături de acei copii/adolescenți care
          trăiesc sentimente de nesiguranța, teama, indecizie si de acei adulti
          care poate nu cunosc, încă, metodele potrivite de a gestiona
          situațiile stresante/neplăcute din viața de zi cu zi.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
