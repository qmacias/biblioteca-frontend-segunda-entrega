import { createStore } from 'vuex';

import bookStore from "@/store/books/bookStore";
import navbarStore from "@/store/navbar/navbarStore";
import serviceStore from "@/store/services/serviceStore";

export default createStore({
  modules: { bookStore, navbarStore, serviceStore },
});
