<template>
  <header class="desktop-header flex col row">
    <h1
        :class="[
            'bg1', 'border', 'bd3', weightClass, colorClass]">{{ title }}</h1>

    <p
        :class="[
            'bg1', 'border', 'bd3', weightClassP, colorClass]">{{ mainText }} {{ additionalText }}</p>
  </header>
</template>

<script>
export default {
  name: "DesktopHeader",
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
    weightClass: {
      type: String,
      default: "font-weight-300",
    },
    weightClassP: {
      type: String,
      default: "font-weight-400",
    },
    colorClass: {
      type: String,
      default: "c6",
    },
  },
};
</script>

<style scoped>
.desktop-header h1,
.desktop-header p {
  margin: 7px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}

.desktop-header p {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1600px) {
  .desktop-header {
    order: 2;
  }

  .desktop-header h1 {
    flex-basis: 24.1%;
  }

  .desktop-header p {
    flex-basis: 74.1%;
  }
}
</style>