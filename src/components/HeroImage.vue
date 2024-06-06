<template>
  <picture
      v-if="heroImg
        && heroImg.img">

    <source
        v-for="({
          id,
          type,
          media,
          srcset,
        }) in heroImg.sources"
          :key="id"
          :type="type"
          :media="media"
          :srcset="srcset">

    <img
         :alt="heroImg.img.alt"
         :src="heroImg.img.path"
         :loading="heroImg.img.loading">
  </picture>
</template>

<script>
export default {
  name: "HeroImage",
  data() {
    const heroImg = '';

    return {
      heroImg: heroImg,
    };
  },
  mounted() {
    this.getHeroImg();
  },
  methods: {
    getHeroImg() {
      fetch(`${process.env.VUE_APP_API_URL}/heroImg.json`)
          .then((res) => res.json()).then((data) => this.heroImg = data)
          .catch((error) => console.error('Error al pedir ilustración:', error));
    },
  },
};
</script>

<style scoped>
/**
 * HeroImage
*/

picture {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

picture img {
  border-radius: 9px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>