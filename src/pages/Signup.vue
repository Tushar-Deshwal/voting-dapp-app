<template>
  <q-page class="q-py-xl q-px-xl">
    <q-tab-panels v-model="panel" animated class="bg-transparent">
      <q-tab-panel name="basicDetails" class="q-px-none">
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-input
              standout="bg-orange text-white"
              dense
              v-model="voter.name"
              placeholder="Name"
              :rules="[val => !!val || 'Name Required.']"
              lazy-rules
              hide-bottom-space
            />
          </div>

          <div class="col-12">
            <q-input
              standout="bg-orange text-white"
              dense
              v-model="voter.email"
              placeholder="Email"
              :rules="[val => !!val || 'Email Required.']"
              lazy-rules
              hide-bottom-space
            />
          </div>

          <div class="col-12">
            <q-input
              standout="bg-orange text-white"
              dense
              v-model="voter.reg_no"
              placeholder="Registration Number"
              :rules="[val => !!val || 'Registration Number Required.']"
              lazy-rules
              hide-bottom-space
            />
          </div>

          <div class="col-12">
            <q-input
              standout="bg-orange text-white"
              dense
              v-model="voter.password"
              placeholder="Password"
              :rules="[val => !!val || 'Password Required.']"
              lazy-rules
              hide-bottom-space
            />
          </div>

          <div class="col-12">
            <q-btn
              color="orange"
              class="full-width"
              label="Create"
              @click="createVoter"
            />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";

import useSWRV from "swrv";
import { fetcher, api } from "boot/axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SignUp",
  setup() {
    const $store = useStore();
    const $router = useRouter();

    $store.dispatch('general/setTitle', 'Manipal University')
    $store.dispatch('general/setShowBack', true)
    $store.dispatch('general/setShowMenu', false)

    let voter = reactive({
      name: null,
      email: null,
      reg_no: null,
      password: null,
    });

    const createVoter = function () {
      $store.dispatch('auth/createVoter', voter);
    };

    let panel = ref("basicDetails");

    return {
      panel,
      voter,
      createVoter,
    };
  },
});
</script>
