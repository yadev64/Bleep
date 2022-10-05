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
                <img :src="user.profile_pic" />
              </q-avatar>
            </div>
            <div class="col q-ml-md q-mt-sm q-mb-none q-pb-sm">
              <h6 class="q-ma-none text-accent">
                <b>{{ user.username }}</b>
              </h6>
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
            maxlength="250"
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

        <q-card-section class="q-mb-md" v-if="imageData">
          <q-card
            flat
            class="image"
            style="max-width: 500px; width: 100%; margin: auto"
          >
            <q-card-section class="q-pa-none q-ma-none">
              <div class="q-pa-none q-ma-none">
                <q-img
                  :src="imageData"
                  class="q-pa-none q-ma-none image"
                  style="
                    cursor: pointer;
                    max-width: 500px;
                    width: 100%;
                    border-radius: 10px;
                  "
                >
                </q-img>
                <div
                  class="icon-area close-icon cursor-pointer flex flex-center"
                  icon="close"
                  flat
                  @click="removeImage()"
                >
                  <q-icon name="close"></q-icon>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>

        <hr class="solid q-ma-none" />
        <q-card-actions class="q-ma-sm">
          <div
            class="icon-area cursor-pointer flex flex-center q-mr-lg q-ml-sm"
            @click="choosePicture"
          >
            <input
              hidden
              class="file-input q-pa-none q-ma-none"
              ref="fileInput"
              style="width: 30px; height: 30px"
              type="file"
              @input="onSelectFile"
            />
            <q-icon name="image"></q-icon>
          </div>

          <div
            class="icon-area cursor-pointer flex flex-center"
            @click="
              () => {
                emojiPopup = true;
              }
            "
          >
            <q-icon name="emoji_emotions"></q-icon>
          </div>

          <q-space></q-space>
          <q-btn
            class="text-white action-button bg-primary"
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

    <q-dialog v-model="emojiPopup">
      <q-card class="q-pa-md" style="width: 200px; height: 300px">
        <EmojiPicker :native="true" hide-group-icons @select="onSelectEmoji" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import EmojiPicker from "vue3-emoji-picker";

export default {
  name: "CreatePostModalComponent",
  components: {
    EmojiPicker,
  },
  setup() {
    const $q = useQuasar();

    let $store = useStore();
    const fileInput = ref(null);

    const postData = ref({
      content: "",
      is_public: true,
      image: null,
    });

    const imageData = ref(null);

    onMounted(() => {
      loadDefaultData();
    });

    const loadDefaultData = () => {
      postData.value = {
        content: "",
        is_public: true,
        image: null,
      };

      imageData.value = null;
    };

    const emojiPopup = ref(false);

    const modalStatus = computed({
      get: () => $store.state.posts.modal_status,
      set: (val) => {
        $store.commit("posts/updateModalStatus", val);
      },
    });

    watch(modalStatus, () => {
      loadDefaultData();
    });

    const user = computed(() => {
      return $store.state.posts.user;
    });

    const onItemClick = (passedStatus) => {
      postData.value.is_public = passedStatus;
    };

    const choosePicture = () => {
      fileInput.value.click();
    };

    let imageHolder = null;

    const onSelectFile = () => {
      const input = fileInput.value;
      imageHolder = input.files;
      if (imageHolder && imageHolder[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageData.value = e.target.result;
        };
        reader.readAsDataURL(imageHolder[0]);
      }
    };

    const removeImage = () => {
      imageHolder = null;
      imageData.value = null;
    };

    const validateData = () => {
      if (imageData.value) {
        postData.value.image = imageData.value;
      }

      if (!postData.value.content) {
        $q.notify({
          type: "negative",
          message: "Please add some content to proceed.",
          position: "bottom-right",
        });

        return false;
      }

      return true;
    };

    function onSelectEmoji(emoji) {
      console.log(emoji);
      postData.value.content += emoji.i;
    }

    const submitData = () => {
      if (validateData()) {
        $store.commit("posts/storePostData", postData.value);

        $q.notify({
          type: "positive",
          message: "Posted successfully :)",
          position: "bottom-right",
        });

        modalStatus.value = false;
      }
    };

    return {
      modalStatus,
      postData,
      user,
      fileInput,
      onItemClick,
      imageData,
      choosePicture,
      onSelectFile,
      removeImage,
      onSelectEmoji,
      emojiPopup,
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
  border-radius: 20px;
}

.icon-area {
  height: 35px;
  width: 35px;
  border-radius: 20px;
  background: #f2f2f2;
}

.close-icon {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  background: #3a4e5960;
}
</style>
