<template>
  <li :id="id"
      class="flex box bg1 border bd3">
    <article class="flex col">
      <h3 class="order-2">{{ name }}</h3>

      <figure class="order-1">
        <i :class="icon" aria-hidden="true"></i>
      </figure>

      <p class="order-3">{{ description }}</p>
    </article>
  </li>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
li {
  flex: 1 1 0;
  padding: 2em 1.5em;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

li article figure i {
  font-size: 2.5em;
  margin-bottom: 0.1em;
  color: var(--color8);
}

li article h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0.5em 0;
  color: var(--color8);
}

li article p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color8);
}

/**
 * Responsive
*/

@media (min-width: 450px) {
  li {
    flex-basis: 47.5%;
  }
}

@media (min-width: 1600px) {
  li {
    flex-basis: 30%;
  }
}

/**
 * Animations
*/

li {
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
}

li:hover {
  transform: translateY(-0.7px);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.2);
}
</style>