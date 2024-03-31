<template>
  <va-card class="sign-in">
    <va-card-title>Sign in</va-card-title>

    <va-card-content>
      <VaForm
        ref="form"
        class="flex flex-column gap-2"
      >
        <VaInput
          v-model="formFields.login"
          :rules="[(value) => requiredInput(value, 'Login')]"
          label="Login"
        />

        <VaInput
          v-model="formFields.password"
          type="password"
          :rules="[(value) => requiredInput(value, 'Password')]"
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

import { requiredInput } from "../../helpers/fieldValiadtonRules";
import { SignInData } from "maritime-contracts";
import { api } from "../../api";

const { isValid, validate } = useForm("form");
const { replace } = useRouter();

const formFields = reactive<SignInData>({
  login: "",
  password: "",
  role: "student"
});

const gotoSignUp = () => {
  replace({
    name: "Registration"
  });
};

const submit = async () => {
  await api.auth.signIn(formFields);
};
</script>

<style scoped></style>
