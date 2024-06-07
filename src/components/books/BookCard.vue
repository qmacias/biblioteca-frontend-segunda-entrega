<template>
  <li>
    <figure class="flex bg1 border bd3">
      <CldImage
          :alt="altGenerator()"
          :publicId="imgPublicId" />

      <figcaption class="flex col">
        <h3>{{ title }}</h3>
        <h4>{{ author }}</h4>
      </figcaption>
    </figure>
  </li>
</template>

<script>
import CldImage from "@/components/shared/images/CldImage.vue";

export default {
  name: "BookCard",
  components: {
    CldImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imgPublicId: {
      type: String,
      required: true,
    },
  },
  methods: {
    altGenerator() {
      return `${this.title}, a book release by ${this.author}.`;
    },
  },
};
</script>

<style scoped>
li figure {
  position: relative;
  margin: 7px;
  padding: 14px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

li img {
  border-radius: 8px;
}

li figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(169, 214, 229, 0.8);
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
}

li figure figcaption h3,
li figure figcaption h4 {
  margin: 0;
  font-weight: 500;
  color: var(--color10);
}

/**
 * Responsive
*/

@media (min-width: 450px) {
  li:nth-child(n) {
    flex-basis: 50%;
  }
}

@media (min-width: 800px) {
  li:nth-child(n) {
    flex-basis: 25%;
  }
}

@media (min-width: 1600px) {
  li img {
    max-height: 241px;
  }

  li:nth-child(n) {
    flex-basis: 12.5%;
  }
}

/**
 * Animations
*/

li figure {
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
}

li figure:hover {
  transform: translateY(-0.7px);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1), 8px 0 15px -3px rgba(0, 0, 0, 0.2);
}

li img {
  transition: opacity 0.3s ease-in-out;
}

ul:hover> :not(:hover) img {
  opacity: 0.9;
}

li figure figcaption {
  opacity: 0;
  transition: opacity 0.3s ease;
}

li figure:hover figcaption {
  opacity: 1;
}
</style>