<template>
  <li :id="id">
    <Router-Link
        :to="path"
        :class="['box', { 'border bd3': id !== 1 }]">{{ label }}</Router-Link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    id: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/**
 * Responsive
*/

@media (min-width: 450px) {
  li:first-child,
  li:nth-child(3),
  li:nth-child(4) {
    flex-basis: 100%;
  }

  li:nth-child(2),
  li:nth-child(3),
  li:nth-child(5),
  li:last-child {
    flex-basis: 50%;
  }
}

@media (min-width: 550px) {
  li:nth-child(2),
  li:nth-child(3),
  li:nth-child(4) {
    flex-basis: 33.33%;
  }

  li:nth-child(5),
  li:nth-child(6) {
    flex-basis: 50%;
  }
}

@media (min-width: 750px) {
  li:nth-child(2),
  li:nth-child(3),
  li:nth-child(4),
  li:nth-child(5),
  li:last-child {
    flex-basis: 20%;
  }
}

@media (min-width: 1012px) {
  li:nth-child(n) {
    flex-basis: 10em;
  }

  li:nth-last-child(2) {
    margin-left: auto;
  }
}

/**
 * Animations
*/

li:first-child a {
  color: var(--color8);
  transition: color 0.1s ease-in-out, transform 0.2s ease-in-out;
}

li:first-child a:hover {
  color: var(--color6);
  transform: translateY(-0.6px);
}

li:nth-child(2) a,
li:nth-child(3) a,
li:nth-child(4) a,
li:nth-child(5) a,
li:last-child a {
  color: white;
  background-color: var(--color5);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.6s ease-in-out;
}

li:nth-child(2) a:hover,
li:nth-child(3) a:hover,
li:nth-child(4) a:hover,
li:nth-child(5) a:hover,
li:last-child a:hover {
  color: whitesmoke;
  background-color: var(--color4);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.1);
}
</style>