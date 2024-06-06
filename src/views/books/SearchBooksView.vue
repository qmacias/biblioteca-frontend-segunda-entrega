<template>
  <main class="flex col">
    <section class="flex col">
      <MobileHeader
          v-if="isMobileView"
          v-bind="getHeader" />

      <DesktopHeader
          v-else
          v-bind="getHeader" />

      <BookCards />
    </section>
  </main>
</template>

<script>
import useWindowResize from "@/useWindowsResize";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(
        'bookStore', ['getHeader'],
    ),
  },
};
</script>