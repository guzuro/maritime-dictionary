<template>
  <div class="not-found">
    <div class="not-found-inner">
      <div class="not-found__title">
        <b>404</b>
        <br />
        <span>Page not found</span>
      </div>
      <va-button
        class="not-found__title mt-2"
        @click="push({ name: 'Auth' })"
      >
        Try again
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { VaButton } from "vuestic-ui";

const { push } = useRouter();
</script>

<style scoped lang="scss">
.not-found {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
