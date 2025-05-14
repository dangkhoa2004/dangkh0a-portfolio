<template>
  <CustomLoading v-if="loadingStore.isLoading" />
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from "vue-router";
import CustomLoading from "@/components/utilities/CustomLoading.vue";
import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();
</script>
