<template>
  <main class="flex col">
    <section class="flex col">
      <MobileHeader
          v-if="isMobileView"
          title="Nuestros Libros"
          mainText="Desde clásicos atemporales hasta las últimas novedades literarias."
          additionalText="Explora nuestra vasta colección de libros en diversos géneros y formatos."
      />

      <DesktopHeader
          v-else
          title="Nuestros Libros"
          mainText="Desde clásicos atemporales hasta las últimas novedades literarias."
          additionalText="Explora nuestra vasta colección de libros en diversos géneros y formatos."
      />

      <BookCards />
    </section>
  </main>
</template>

<script>
import useWindowResize from "@/useWindowsResize";

import BookCards from "@/components/books/BookCards.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import DesktopHeader from "@/components/DesktopHeader.vue";

export default {
  name: "SearchBooksView",
  components: {
    BookCards,
    MobileHeader,
    DesktopHeader,
  },
  setup() {
    const {
      isMobileView,
    } = useWindowResize(1600);

    return { isMobileView };
  },
};
</script>

<style scoped>

</style>