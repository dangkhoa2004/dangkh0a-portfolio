<template>
  <div class="relative min-h-screen">
    <BackButton class="fixed top-4 left-4 z-10" />
    <div class="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] p-4 text-center">
      <p>This is the main content of the page.</p>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/utilities/BackButton.vue";

export default {
  components: {
    BackButton
  },
  name: 'EmptyPage',
};
</script>