<template>
  <div>
    <q-card class="q-pa-none" flat bordered>
      <div class="row q-ma-md">
        <div>
          <q-avatar style="border-radius: 25px">
            <img src="~assets/profile_pic.png" />
          </q-avatar>
        </div>
        <div class="col q-ml-md q-mt-sm q-mb-sm q-pb-sm">
          <h6 class="q-ma-none text-accent"><b>James Franco</b></h6>
        </div>
      </div>
      <div class="row action-holder q-pa-md">
        <h5 class="q-ma-none text-accent"><b>What's on your mind?</b></h5>
        <q-space></q-space>
        <q-btn
          class="text-white action-button bg-primary"
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
  border-radius: 20px;
}
.action-holder {
  background: #ebf6fc;
  border-radius: 20px;
}
</style>
