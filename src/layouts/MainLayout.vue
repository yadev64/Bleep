<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white toolbar">
        <q-space></q-space>

        <q-img
          class="q-mt-xs"
          src="~assets/bleep_full.png"
          fit="contain"
          style="height: 100px; width: 100px"
        ></q-img>
        <!-- <q-toolbar-title class="text-blue"> Bleep </q-toolbar-title> -->
        <q-space></q-space>
        <!-- <div class="text-blue">Hi Steve</div> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>

<style scoped>
.toolbar {
  height: 80px;
}
</style>
