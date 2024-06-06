<template>
  <header class="mobile-header flex col bg1 c8 border bd3">
    <h1>{{ title }}</h1>
    <p>
      {{ mainText }}

      <span>
        {{ additionalText }}
      </span>
    </p>
  </header>
</template>

<script>
export default {
  name: "MobileHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    mainText: {
      type: String,
      required: true,
    },
    additionalText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.mobile-header {
  margin: 7px;
  padding: 12.5px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

.mobile-header p span {
  display: inline;
}
</style>