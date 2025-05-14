<script setup>
import HelloWorld from "./Ingredient/HelloWorld.vue";
import TheWelcome from "./Ingredient/TheWelcome.vue";
</script>

<template>
  <header
    class="leading-normal lg:flex lg:items-center lg:pr-[calc(var(--section-gap)/2)]"
  >
    <img
      alt="Vue logo"
      class="logo block mx-auto mb-8 lg:mx-0 lg:mb-0 lg:mr-8"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper lg:flex lg:items-start lg:flex-wrap">
      <HelloWorld msg="Bạn đã làm được!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
