<script>
  import { tick } from "svelte";
  import Image1 from "../assets/cards/card1.jpeg";
  import Image2 from "../assets/cards/card2.jpeg";
  import Image3 from "../assets/cards/card3.jpeg";
  import Image4 from "../assets/cards/card4.jpeg";

  const images = [Image1, Image2, Image3, Image4];

  let currentImage = 0; // Current index of displayed image
  let isTransitioning = false;
  let startX = 0;
  let endX = 0;

  async function prevImage() {
    if (!isTransitioning) {
      isTransitioning = true;
      await tick();
      currentImage = (currentImage - 1 + images.length) % images.length;
      isTransitioning = false;
    }
  }

  async function nextImage() {
    if (!isTransitioning) {
      isTransitioning = true;
      await tick();
      currentImage = (currentImage + 1) % images.length;
      isTransitioning = false;
    }
  }

  function handleSwipeStart(event) {
    startX = event.clientX;
  }

  function handleSwipeEnd(event) {
    endX = event.clientX;
    if (endX - startX > 50) {
      prevImage();
    } else if (startX - endX > 50) {
      nextImage();
    }
  }

  function handleSwipe(node) {
    node.addEventListener("mousedown", handleSwipeStart);
    node.addEventListener("mouseup", handleSwipeEnd);

    return {
      destroy() {
        node.removeEventListener("mousedown", handleSwipeStart);
        node.removeEventListener("mouseup", handleSwipeEnd);
      },
    };
  }
</script>

<div
  class="cards"
  use:handleSwipe
  on:mousedown={handleSwipeStart}
  on:mouseup={handleSwipeEnd}
>
  <button class="btn-previous" on:click={prevImage}
    ><i class="fa-solid fa-arrow-left fa-fade fa-xl" /></button
  >
  {#each images as image, index (image)}
    <img
      class={index === currentImage ? "image active" : "image"}
      src={image}
      alt={`Image ${index + 1}`}
    />
  {/each}
  <button class="btn-next" on:click={nextImage}
    ><i class="fa-solid fa-arrow-right fa-beat-fade fa-xl" /></button
  >
</div>

<style>
  .cards {
    /* background-color: bisque; */
    width: 100%;
    height: 35rem; /* 550px */
    /* overflow: hidden; */
    /* position: relative; */
    display: flex; /* Use flexbox to center the image horizontally and vertically */
    justify-content: center; /* Center the image horizontally within the div */
    align-items: center;
  }

  .image {
    object-fit: cover;
    width: 30rem;
    border-radius: 2rem;
    position: absolute;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .active {
    opacity: 1;
  }

  .cards button {
    margin-right: 20rem;
    margin-left: 20rem;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 0.8125rem;
    background-color: #e3d8cb;
    color: black;
    padding: 0.625rem 1.125rem;
    border-radius: 1rem;
    border: 1px solid white;
    transition: 0.75s;
  }

  .cards button:hover {
    background-color: #d1927f;
    color: white;
    transition: 0.5s;
  }

  /* ==================MOBILE========================== */

  @media (max-width: 800px) {
    .cards button {
      /* display: none; */
      margin-top: auto;
      margin-right: 50px;
      margin-left: 50px;
    }
  }

  @media (max-width: 600px) {
    .image {
        width: 80%;
    }
  }

  @media (max-width: 500px) {
    .cards {
        height: 30rem;
    }
  }

  @media (max-width: 400px) {
    .cards {
        height: 25rem;
    }
  }
  
  @media (max-width: 300px) {
    .cards {
        height: 20rem;
    }
  }
</style>
