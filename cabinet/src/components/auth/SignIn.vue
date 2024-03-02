<template>
  <va-card class="sign-in">
    <va-card-title>Sign in</va-card-title>

    <va-card-content>
      <VaForm
        ref="form"
        class="flex flex-column gap-2"
      >
        <VaInput
          v-model="formFields.username"
          :rules="[(value) => (value && value.length > 0) || 'Username is required']"
          label="Username"
        />

        <VaInput
          v-model="formFields.password"
          type="password"
          :rules="[(value) => (value && value.length > 0) || 'Password is required']"
          label="Password"
        />

        <VaButton
          :disabled="!isValid"
          @click="validate() && submit()"
        >
          Sign in
        </VaButton>
      </VaForm>

      <div class="mt-3 va-text-center">
        <div>
          Dont have account?
          <a
            class="va-link va-text-bold"
            @click.prevent="gotoSignUp"
          >
            Sign up
          </a>
        </div>
      </div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaButton, useForm } from "vuestic-ui";
import { useRouter } from "vue-router";
import { AuthData } from "../../types/auth";

const { isValid, validate } = useForm("form");
const { replace } = useRouter();

const formFields = reactive<AuthData>({
  username: "",
  password: ""
});

const gotoSignUp = () => {
  replace({
    name: "Registration"
  });
};

const submit = () => {
  console.log(1);
};
</script>

<style scoped></style>
