<template>
  <div>
    <q-card class="q-pa-md" flat bordered>
      <div class="row">
        <div>
          <q-avatar style="border-radius: 25px">
            <img src="~assets/profile_pic.png" />
          </q-avatar>
        </div>
        <div class="col q-ml-md q-mt-md q-mb-lg q-pb-sm">
          <p class="q-ma-none"><b>Yadev Jayachandran</b></p>
        </div>
      </div>
      <div class="row">
        <h4 class="q-ma-none"><b>What's on your mind?</b></h4>
        <q-space></q-space>
        <q-btn
          class="text-white action-button"
          flat
          @click="
            () => {
              modalStatus = !modalStatus;
            }
          "
        >
          <p class="q-ma-none">
            <b>Create Bleep </b>
          </p>
        </q-btn>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "NewPostActionComponent",

  setup() {
    let $store = useStore();

    const modalStatus = computed({
      get: () => $store.state.posts.modal_status,
      set: (val) => {
        $store.commit("posts/updateModalStatus", val);
      },
    });

    return {
      modalStatus,
    };
  },
};
</script>
<style scoped>
.action-button {
  background: rgb(0, 153, 255);
  border-radius: 20px;
}
</style>
