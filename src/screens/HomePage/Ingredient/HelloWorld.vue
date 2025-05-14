<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1
      class="green font-medium text-4xl relative top-[-10px] text-center lg:text-left"
    >
      {{ msg }}
    </h1>

    <h3 class="text-xl text-center lg:text-left">
      Bạn đã tạo dự án thành công
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
