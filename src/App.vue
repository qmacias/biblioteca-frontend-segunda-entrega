<template>
  <div
      id="container"
      class="flex col">
    <NavbarItems />
    <Router-View />
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

import NavbarItems from "@/components/navbar/NavbarItems.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();

watchEffect(() => {
  document.title = route.meta.title || "Biblioteca Online";
});
</script>

<style>
/**
 * App
*/

:root {
  /*
      https://coolors.co/palette/e3f2fd-bbdefb-90caf9-64b5f6-42a5f5-2196f3-1e88e5-1976d2-1565c0-0d47a1
  */
  --color1: #A9D6E5;
  --color2: #82b6ca;
  --color3: #61A5C2;
  --color4: #468FAF;
  --color5: #2C7DA0;
  --color6: #2A6F97;
  --color7: #014F86;
  --color8: #01497C;
  --color9: #013A63;
  --color10: #012A4A;
}

.c1 { color: var(--color1); }

.c2 { color: var(--color2); }

.c3 { color: var(--color3); }

.c4 { color: var(--color4); }

.c5 { color: var(--color5); }

.c6 { color: var(--color6); }

.c7 { color: var(--color7); }

.c8 { color: var(--color8); }

.c9 { color: var(--color9); }

.c10 { color: var(--color10); }

.font-weight-300 { font-weight: 300; }
.font-weight-400 { font-weight: 400; }
.font-weight-500 { font-weight: 500; }

.bd1 { border-color: var(--color1); }

.bd2 { border-color: var(--color2); }

.bd3 { border-color: var(--color3); }

.bd4 { border-color: var(--color4); }

.bd5 { border-color: var(--color5); }

.bd6 { border-color: var(--color6); }

.bd7 { border-color: var(--color7); }

.bd8 { border-color: var(--color8); }

.bd9 { border-color: var(--color9); }

.bd10 { border-color: var(--color10); }

.bg1 { background-color: var(--color1); }

.bg2 { background-color: var(--color2); }

.bg3 { background-color: var(--color3); }

.bg4 { background-color: var(--color4); }

.bg5 { background-color: var(--color5); }

.bg6 { background-color: var(--color6); }

.bg7 { background-color: var(--color7); }

.bg8 { background-color: var(--color8); }

.bg9 { background-color: var(--color9); }

.bg10 { background-color: var(--color10); }

.box {
  margin: 7px;
  padding: 5px;
  border-radius: 10px;
}

.border {
  border-width: 1px;
  border-style: solid;
}

.flex {
  display: flex;
}

.col {
  flex-flow: column nowrap;
}

@media (min-width: 450px) {
  .row {
    flex-flow: row wrap;
  }
}

#container {
  margin: 4.5px;
  text-align: center;
}

.order-1 { order: 1; }

.order-2 { order: 2; }

.order-3 { order: 3; }

.order-4 { order: 4; }

.order-5 { order: 5; }

.order-6 { order: 6; }

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

a,
span {
  display: block;
}

h1,
h2,
h3,
h4,
p {
  cursor: default;
}

button {
  cursor: pointer;
}

a,
button {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

body {
  background-color: var(--color2);
  font: 1em/1.618 Inter, sans-serif;
}

/*----------------
    Animations
----------------*/

a:focus,
input:focus,
button:focus,
select:focus,
textarea:focus {
  outline: 2px solid var(--color3);
}

header#form-header {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

/*--------------
    Ingresar
--------------*/

header#form-header nav ul li:first-child a {
  color: var(--color8);
  transition: color 0.1s ease-in-out, transform 0.2s ease-in-out;
}

header#form-header nav ul li:first-child a:hover {
  color: var(--color6);
  transform: translateY(-0.6px);
}

header#form-header nav ul li:last-child a {
  color: white;
  background-color: var(--color5);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.6s ease-in-out;
}

header#form-header nav ul li:last-child a:hover {
  color: whitesmoke;
  background-color: var(--color4);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.1);
}

form#login-form button,
form#signup-form button,
form#contact-form button {
  color: whitesmoke;
  background-color: var(--color4);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.6s ease-in-out;
}

form#login-form button:hover,
form#signup-form button:hover,
form#contact-form button:hover {
  color: white;
  background-color: var(--color5);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.1);
}
</style>