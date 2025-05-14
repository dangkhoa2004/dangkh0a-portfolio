<template>
  <div class="greetings">
    <h2 class="flex flex-row flex-nowrap items-center mt-18">
      <span class="flex-grow block border-t border-blue-500"></span>
      <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium">
        <span class="colored-word-chao mr-1">Welcome</span>
        <span class="colored-word-mung mr-1">to</span>
        <span class="colored-word-den mr-1">dang</span>
        <span class="colored-word-voi mr-1">kh0a's</span>
        <span class="colored-word-trang mr-1">page</span>
      </span>
      <span class="flex-grow block border-t border-yellow-400"></span>
    </h2>
  </div>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <router-link to="/about">About Me</router-link>
    </template>

    Learn more about my background, education, and what drives me as a Fullstack Developer.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <router-link to="/projects">Projects</router-link>
    </template>

    Check out some of the projects I've been working on and the technologies I've utilized.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconCertifications />
    </template>
    <template #heading>
      <router-link to="/contact">Certifications & Awards</router-link>
    </template>
    .....
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconBlog />
    </template>
    <template #heading>
      <router-link to="/contact">Blog or Technical Articles</router-link>
    </template>
    .....
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconCareerGoals />
    </template>
    <template #heading>
      <router-link to="/contact">Career Goals</router-link>
    </template>
    .....
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <router-link to="/contact">Contact</router-link>
    </template>
    Feel free to reach out if you have any questions or opportunities you'd like to discuss.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <Readme />
  </WelcomeItem>
</template>

<script setup>
import WelcomeItem from "../Components/WelcomeItem.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import IconCertifications from "@/components/icons/IconCertifications.vue";
import IconBlog from "@/components/icons/IconBlog.vue";
import IconCareerGoals from "@/components/icons/IconCareerGoals.vue";
import Readme from "@/components/utilities/Readme.vue";
</script>

<style scoped>
.greetings {
  margin-bottom: 2.5rem;
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
}
</style>