<template>
  <q-page class="page-bg">
    <div class="row q-mx-md">
      <div class="col-12">
        <div style="width: 100%">
          <q-card class="main-area q-pa-md">
            <h6 class="q-ma-xs text-accent">Home</h6>
            <newPostActionComponent></newPostActionComponent>
          </q-card>
        </div>
      </div>
    </div>

    <div class="row q-pb-xl q-pt-none" v-if="postsList.length > 0">
      <div class="col-12">
        <div style="width: 100%">
          <q-card class="main-area q-pa-md">
            <div v-for="post in postsList" :key="post.id">
              <postCard
                :image="post.image"
                :content="post.content"
                :likes="post.likes"
                :is_public="post.is_public"
                :user="user"
              ></postCard>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
  <createPostModalComponent></createPostModalComponent>
</template>

<script>
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import newPostActionComponent from "src/components/Post/NewPostActionComponent.vue";
import createPostModalComponent from "src/components/Post/CreatePostModalComponent.vue";
import postCard from "src/components/Post/PostCard.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    newPostActionComponent,
    createPostModalComponent,
    postCard,
  },

  setup() {
    let $store = useStore();

    const postsList = computed(() => {
      return $store.state.posts.posts;
    });

    const user = computed(() => {
      return $store.state.posts.user;
    });

    return {
      postsList,
      user,
    };
  },
});
</script>

<style scoped>
.page-bg {
  background: rgb(198, 227, 255);
}
.main-area {
  background: white;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
}
</style>
