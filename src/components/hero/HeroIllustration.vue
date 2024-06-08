<template>
  <picture>
    <HeroSourceItems />

    <img :alt="defaultImage.alt"
         :src="defaultImage.path">
  </picture>
</template>

<script>
import HeroSourceItems from "@/components/hero/HeroSourceItems.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeroImage",
  components: { HeroSourceItems },
  computed: {
    ...mapGetters(
        'heroStore', ['getDefaultImage'],
    ),
    defaultImage() { return this.getDefaultImage; },
  },
};
</script>

<style scoped>
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