<template>
  <q-card
    class="q-px-md q-pt-md q-pb-md q-mb-md"
    style="border: 2px solid #f2f2f2"
    flat
    bordered
  >
    <div class="row q-ma-md">
      <div>
        <q-avatar style="border-radius: 25px; height: 30px; width: 30px">
          <img :src="user.profile_pic" />
        </q-avatar>
      </div>
      <div class="col q-ml-md q-mt-xs q-mb-none q-pb-sm">
        <p class="q-ma-none text-accent">
          <b>{{ user.username }}</b>
        </p>
      </div>

      <q-btn
        class="dropdown q-mb-xs"
        :icon="is_public ? 'public' : 'lock'"
        dropdown-icon="none"
        rounded
        disable
        flat
        :label="is_public ? 'Public' : 'Private'"
      ></q-btn>
    </div>
    <div class="row action-holder q-px-md q-pb-md">
      <h6 class="q-ma-none text-accent">
        <b>{{ content }} </b>
      </h6>
      <q-space></q-space>
    </div>

    <q-img v-if="image" style="border-radius: 10px" :src="image"></q-img>

    <!-- <q-card-actions class="q-py-md">
      <q-icon
        :name="likes ? 'favorite' : 'favorite_border'"
        color="red"
        class="q-ml-sm"
        style="height: 20px; font-size: 20px"
      ></q-icon>
    </q-card-actions> -->
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          username: "",
          profile_pic: "",
        };
      },
    },
    image: { type: Object, default: null },
    content: { type: String, default: "" },
    is_public: { type: Boolean, default: true },
    likes: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.dropdown {
  background: #ebf6fc;
  color: #2675a3;
  font-size: 10px;
}
</style>
