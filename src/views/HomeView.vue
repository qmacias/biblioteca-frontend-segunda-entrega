<template>
  <main class="flex col">
    <section class="flex row box bg1 border bd4">
      <header class="flex col">
        <h1>Biblioteca Online</h1>

        <p>
          <span>
              Donde los sueños se vuelven realidad
          </span>

          <span>
              ¡Sumérgete en historias fascinantes y aprende algo nuevo cada día!
          </span>

          <span>
              Encontrarás una amplia selección de libros en nuestra plataforma digital.
          </span>
        </p>
      </header>

      <HeroImage />
    </section>
  </main>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "HomeView",
  components: {
    HeroImage,
  },
};
</script>

<style scoped>
/**
 * HomeView
*/

main section {
  position: relative;
  padding: 0;
  flex-direction: row;
  justify-content: flex-end;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

main section header {
  padding: 30px;
  color: var(--color8);
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: rgba(169, 214, 229, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1;
}

main section header h1 {
  font-size: 2.5em;
  font-weight: 500;
}

main section header p span:first-child {
  font-size: 1.75em;
  font-weight: 400;
  margin-bottom: 10px;
}

main section header p {
  margin-bottom: 20px;
}

main section header p span:nth-child(2),
main section header p span:last-child {
  font-size: 1.25em;
  font-weight: 400;
  display: inline;
}

main section header a {
  font-size: 1.1em;
  padding: 10px 20px;
}

@media (min-width: 450px) {
  main section {
    height: 65vh;
  }
}

@media (min-width: 550px) {
  main section {
    height: 72vh;
  }
}

@media (min-width: 736px) {
  main section header {
    flex-basis: 100%;
  }
}

@media (min-width: 790px) {
  main section header p span:nth-child(2),
  main section header p span:last-child {
    display: block;
  }
}

@media (min-width: 750px) {
  main section {
    height: 79vh;
  }
}

@media (min-width: 1012px) {
  main section {
    height: 85.9vh;
  }
}
</style>
