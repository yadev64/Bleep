<template>
  <q-page class="page-bg">
    <div class="row">
      <div class="col-12">
        <div style="width: 100%">
          <q-card class="main-area q-pa-md">
            <h6 class="q-ma-xs text-accent">Home</h6>
            <newPostActionComponent></newPostActionComponent>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
  <createPostModalComponent></createPostModalComponent>
</template>

<script>
import { defineComponent } from "vue";
import newPostActionComponent from "src/components/Post/NewPostActionComponent.vue";
import createPostModalComponent from "src/components/Post/CreatePostModalComponent.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    newPostActionComponent,
    createPostModalComponent,
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
