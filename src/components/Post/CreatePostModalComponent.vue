<template>
  <div>
    <q-dialog v-model="modalStatus">
      <q-card class="modal-card">
        <q-card-section class="row">
          <h6 class="q-ma-none text-accent"><b>Create new post</b></h6>
          <q-space></q-space>
          <q-btn
            class="text-accent"
            icon="close"
            flat
            @click="
              () => {
                modalStatus = false;
              }
            "
          >
          </q-btn>
        </q-card-section>
        <hr class="solid q-ma-none" />

        <q-card-section class="q-pb-none">
          <div class="row">
            <div>
              <q-avatar style="border-radius: 25px">
                <img src="~assets/profile_pic.png" />
              </q-avatar>
            </div>
            <div class="col q-ml-md q-mt-sm q-mb-none q-pb-sm">
              <h6 class="q-ma-none text-accent"><b>James Franco</b></h6>
            </div>
            <div>
              <q-btn-dropdown
                class="dropdown q-mt-xs"
                :icon="postData.is_public ? 'public' : 'lock'"
                dropdown-icon="expand_more"
                rounded
                flat
                :label="postData.is_public ? 'Public' : 'Private'"
              >
                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    :class="postData.is_public ? 'text-primary' : 'text-accent'"
                    @click="onItemClick(true)"
                  >
                    <q-item-section avatar>
                      <q-avatar icon="public"></q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label><b>Public</b></q-item-label>
                      <q-item-label caption>Visible to everyone</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon
                        v-show="postData.is_public"
                        name="done"
                        color="secondary"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>

                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    :class="
                      !postData.is_public ? 'text-primary' : 'text-accent'
                    "
                    @click="onItemClick(false)"
                  >
                    <q-item-section avatar>
                      <q-avatar icon="lock"></q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label><b>Private</b></q-item-label>
                      <q-item-label caption
                        >Visible to your followers</q-item-label
                      >
                    </q-item-section>
                    <q-item-section side>
                      <q-icon
                        v-show="!postData.is_public"
                        name="done"
                        color="secondary"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="postData.content"
            placeholder="What's happening?"
            flat
            borderless
            type="textarea"
            class="textarea"
          />
        </q-card-section>
        <q-card-section>
          <div class="row">
            <q-space></q-space>
            <p class="text-accent q-pr-md">
              <b>{{ postData.content.length }}/250</b>
            </p>
          </div>
        </q-card-section>
        <hr class="solid q-ma-none" />
        <q-card-actions class="q-ma-sm">
          <div
            class="
              icon-area
              cursor-pointer
              flex flex-center
              q-mr-lg q-ml-sm
              v-ripple
            "
          >
            <q-icon name="image"></q-icon>
          </div>

          <div class="icon-area cursor-pointer flex flex-center v-ripple">
            <q-icon name="emoji_emotions"></q-icon>
          </div>

          <q-space></q-space>
          <q-btn
            class="text-white action-button"
            flat
            @click="
              () => {
                submitData();
              }
            "
          >
            <p class="q-ma-sm">
              Send Post
              <q-icon
                style="font-size: 14px; padding-bottom: 3px"
                class="q-ml-sm"
                name="send"
              ></q-icon>
            </p>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "CreatePostModalComponent",
  setup() {
    let $store = useStore();

    const postData = ref({
      content: "",
      is_public: true,
      image: null,
    });

    const modalStatus = computed({
      get: () => $store.state.posts.modal_status,
      set: (val) => {
        $store.commit("posts/updateModalStatus", val);
      },
    });

    const onItemClick = (passedStatus) => {
      postData.value.is_public = passedStatus;
    };

    const submitData = () => {};

    return {
      modalStatus,
      postData,
      onItemClick,
      submitData,
    };
  },
};
</script>
<style scoped>
.modal-card {
  max-width: 650px;
  width: 100%;
  /* height: 100px; */
}
hr.solid {
  border-top: 1px solid #f2f2f2;
}

.dropdown {
  background: #ebf6fc;
  color: #2675a3;
}

.textarea {
  height: 110px;
  margin-left: 65px;
}

.action-button {
  background: #2675a3;
  border-radius: 20px;
}

.icon-area {
  height: 35px;
  width: 35px;
  border-radius: 20px;
  background: #f2f2f2;
}
</style>
