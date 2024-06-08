<template>
  <footer
      v-if="showFooter"
      class="bg1 border bd3">
    <p>Todos los derechos reservados <span>&copy; 2024</span></p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    showFooter: Boolean,
  },
};
</script>

<style scoped>
footer {
  margin: 7px 7px 8px 7px;
  padding: 11px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

footer p {
  color: var(--color10);
}

@media (min-width: 380px) {
  footer p span {
    display: inline;
  }
}
</style>