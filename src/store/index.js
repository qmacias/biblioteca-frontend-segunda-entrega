import { createStore } from 'vuex';

import bookHeaderStore from "@/store/books/bookHeaderStore";
import serviceHeaderStore from "@/store/services/serviceHeaderStore";

export default createStore({
  modules: {
    bookHeaderStore,
    serviceHeaderStore,
  },
});
