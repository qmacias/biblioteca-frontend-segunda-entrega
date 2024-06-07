<template>
  <HeroSourceItem
      v-if="sources"

      v-for="({
          id,
          type,
          media,
          srcset,
        }) in sources" :key="id"
      :type="type"
      :media="media"
      :srcset="srcset" />
</template>

<script>
import HeroSourceItem from "@/components/hero/HeroSourceItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeroSourceItems",
  components: { HeroSourceItem },
  computed: {
    ...mapGetters(
        'heroStore', ['getSources'],
    ),
    sources() { return this.getSources; },
  },
};
</script>

<style scoped>

</style>