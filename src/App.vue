<template>
  <DarkModeButton class="dark-mode-button" />
  <CustomLoading v-if="loadingStore.isLoading" />
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from "vue-router";
import CustomLoading from "@/components/utilities/CustomLoading.vue";
import DarkModeButton from "@/components/utilities/DarkModeButton.vue";
import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();
</script>

<style scoped>
.dark-mode-button {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 10;
}
</style>