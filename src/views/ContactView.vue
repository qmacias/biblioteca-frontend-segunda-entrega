<template>
  <div class="contact">
    <h1>This is the Contact page.</h1>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  components: {},
};
</script>

<style scoped>
/**
 * ContactView
*/

section#contact header {
  margin: 14px 7px 7px 7px;
  padding: 12.5px;
  border-radius: 10px;
  color: var(--color8);
}

section#contact header p span {
  display: inline;
}

form#contact-form {
  width: 50%;
  margin: 7px auto;
}

form#contact-form button {
  font-size: 1rem;
}

form#contact-form h2 {
  margin-bottom: 5px;
  color: var(--color5);
}

form#contact-form input {
  color: var(--color6);
}

form#contact-form button,
form#contact-form input::placeholder,
form#contact-form textarea::placeholder {
  font-family: Inter, sans-serif;
}

form#contact-form input::placeholder,
form#contact-form textarea::placeholder {
  color: var(--color4);
}

form#contact-form textarea {
  resize: vertical;
}

form#contact-form label {
  opacity: 0.8;
  color: white;
  background-color: var(--color5);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
}

@media (min-width: 450px) {
  section#contact form#contact-form div {
    flex-basis: 100%;
  }
}

@media (min-width: 738px) {
  section#contact header p span {
    display: block;
  }
}

@media (min-width: 875px) {
  section#contact form#contact-form div {
    flex-basis: 50%;
  }
}
</style>