<template>
  <div class="auth-layout-container container">
    <div class="auth-layout">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter, RouterView } from "vue-router";

const { replace } = useRouter();

onMounted(() => {
  replace({ name: "Login" });
});
</script>

<style scoped lang="scss">
.auth-layout {
  &-container {
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  max-width: 695px;
  width: 500px;
}
</style>
