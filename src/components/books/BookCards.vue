<template>
  <ul class="flex col row">
    <BookCard
        v-if="books"

        v-for="({
          id,
          title,
          author,
          img: { publicId },
        }) in books" :key="id"
        :id="id"
        :title="title"
        :author="author"
        :imgPublicId="publicId" />
  </ul>
</template>

<script>
import BookCard from "@/components/books/BookCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookCards",
  components: { BookCard },
  computed: {
    ...mapGetters(
        'bookStore', ['getBooks'],
    ),
    books() { return this.getBooks; },
  },
};
</script>

<style scoped>
/**
 * Responsive
*/

@media (min-width: 1600px) {
  ul {
    order: 1;
  }
}
</style>