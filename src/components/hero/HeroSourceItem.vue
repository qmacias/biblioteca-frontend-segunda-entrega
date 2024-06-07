<template>
  <source
      :type="type"
      :media="media"
      :srcset="srcset">
</template>

<script>
export default {
  name: "HeroSourceItem",
  props: {
    type: {
      type: String,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>