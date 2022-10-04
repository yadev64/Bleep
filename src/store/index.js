import {
  store
} from "quasar/wrappers";
import {
  createStore
} from "vuex";

import posts from "./posts";

export default store(function () {
  const Store = createStore({
    modules: {
      posts
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
