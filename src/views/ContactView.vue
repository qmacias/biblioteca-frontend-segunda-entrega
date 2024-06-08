<template>
  <main>
    <div class="boxx bg1 border bd3">
      <div class="inner-boxx">
        <!-- Cambiar por "post" en el futuro! -->
        <form class="flex col" action="#" method="get">
          <h2>Contacto</h2>

          <div class="flex roww">
            <div class="flex col">
              <label class="box border bd3" for="name">Nombre</label>

              <input class="box bg1 border bd3" style="padding: 10px;" type="text" id="name"
                     name="name" placeholder="Nombre">
            </div>

            <div class="flex col">
              <label class="box border bd3" for="surname">Apellido</label>

              <input class="box bg1 border bd3" style="padding: 10px;" type="text" id="surname"
                     name="surname" placeholder="Apellido">
            </div>
          </div>

          <div class="flex roww">
            <div class="flex col">
              <label class="box border bd3" for="email">Correo</label>

              <input class="box bg1 border bd3" style="padding: 10px;" type="email" id="email"
                     name="email" placeholder="Correo">
            </div>

            <div class="flex col">
              <label class="box border bd3" for="subject">Asunto</label>

              <input class="box bg1 border bd3" style="padding: 10px;" type="text" id="subject"
                     name="subject" placeholder="Asunto">
            </div>
          </div>

          <div class="flex roww">
            <div class="flex col">
              <label class="box border bd3" for="message">Mensaje</label>

              <textarea class="box bg1 border bd3" style="padding: 10px;" id="message" name="message"
                        placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
          </div>

          <div class="flex col">
            <button class="box border bd3" style="padding: 10px;" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
/*main {
  min-height: 80.2vh;
}*/

button {
  font-size: 1rem;
}

h2 {
  margin-bottom: 5px;
  color: var(--color5);
}

input {
  color: var(--color6);
}

/* INICIO -> Estilos compartidos */

button,
select,
optgroup,
input[type="date"],
input::placeholder,
textarea::placeholder {
  font-family: Inter, sans-serif;
}

select,
optgroup,
input[type="date"],
input::placeholder,
textarea::placeholder {
  color: var(--color4);
}

/* FINAL -> Estilos compartidos */

label {
  opacity: 0.8;
  color: white;
  background-color: var(--color5);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
}

textarea::-webkit-resizer {
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="%232C7DA0" d="M.5 4A2.5 2.5 0 0 1 3 1.5h12A2.5 2.5 0 0 1 17.5 4v8a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 12V4zM3 2.5A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 15 2.5H3zm11.854 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"/></svg>') no-repeat;
  background-position: calc(100% - 0.2rem) center !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  padding-right: 1rem !important;
}

main {
  width: 100%;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

main .boxx {
  position: relative;
  width: 100%;
  max-width: 514px;
  height: 778px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

main .inner-boxx {
  position: absolute;
  width: calc(100% - 3.1rem);
  height: calc(100% - 2.5rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  /*background-color: tomato;*/
}

form {
  overflow-y: auto;
}

/* Scrollbar (Chrome, Safari, Opera) */

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: var(--color1);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color4);
  border-radius: 6px;
  border: 3px solid var(--color1)
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--color5);
}

/* Scrollbar (Firefox) */

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color4) var(--color1);
}

form textarea {
  resize: vertical;
  overflow: auto;
}

.roww {
  flex-flow: row wrap;
}

form .flex.roww:nth-child(n) div {
  flex-basis: 100%;
}

/**
 * Responsive
*/

@media (min-width: 450px) {
  /*
      Arreglar más adelante...
      Se solapa con la media query
      para .row (del main_styles.css)
  */

  main {
    min-height: 87vh;
  }
}

@media (min-width: 545px) {
  form .flex.roww:nth-child(n) div {
    flex-basis: 50%;
  }

  form .flex.roww:nth-child(4) div {
    flex-basis: 100%;
  }

  main .boxx {
    max-width: 514px;
    height: 465px;
  }
}

/**
 * Animations
*/

form button {
  color: whitesmoke;
  background-color: var(--color4);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.6s ease-in-out;
}

form button:hover {
  color: white;
  background-color: var(--color5);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.1);
}
</style>