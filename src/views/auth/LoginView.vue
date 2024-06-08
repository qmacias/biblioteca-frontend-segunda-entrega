<template>
  <main>
    <div class="boxx bg1 border bd3">
      <div class="inner-boxx">
        <!-- Cambiar por "post" en el futuro!-->
        <form class="flex col" action="#" method="get">
          <h2 style="margin-bottom: 5px;">Ingresar</h2>

          <label class="box border bd3" for="username">Usuario</label>

          <input class="box bg1 border bd3" style="padding: 10.5px;" type="text" id="username"
                 name="username" placeholder="Usuario">

          <label class="box border bd3" for="password">Contraseña</label>

          <input class="box bg1 border bd3" style="padding: 10.5px;" type="password" id="password"
                 name="password" placeholder="Contraseña">

          <button class="box border bd3" style="padding: 9px;" type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
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
  max-width: 300px;
  height: 370px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

main .inner-boxx {
  position: absolute;
  width: calc(100% - 3.7rem);
  height: calc(100% - 3.7rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: tomato; */
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

  .roww {
    flex-flow: row wrap;
  }

  main {
    min-height: 87vh;
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