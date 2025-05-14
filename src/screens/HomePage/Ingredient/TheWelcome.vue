<template>
  <div class="greetings">
    <h2 class="flex flex-row flex-nowrap items-center mt-18">
      <span class="flex-grow block border-t border-blue-500"></span>
      <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium">
        <span class="colored-word-chao mr-1">Chào</span>
        <span class="colored-word-mung mr-1">mừng</span>
        <span class="colored-word-den mr-1">đến</span>
        <span class="colored-word-voi mr-1">với</span>
        <span class="colored-word-trang mr-1">trang</span>
        <span class="colored-word-cua mr-1">của</span>
        <span class="colored-word-dang mr-1">Dang</span>
        <span class="colored-word-khoa">Khoa</span>
      </span>
      <span class="flex-grow block border-t border-yellow-400"></span>
    </h2>
  </div>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <router-link to="/">Trang chủ</router-link>
    </template>

    Tài liệu chính thức của Vue cung cấp cho bạn tất cả thông tin cần thiết để
    bắt đầu.
    <a href="https://vuejs.org/" target="_blank" rel="noopener">tài liệu chính thức</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <router-link to="/about">Giới thiệu</router-link>
    </template>

    Dự án này được phục vụ và đóng gói bằng
    <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. Thiết lập IDE được khuyến
    nghị
    là
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
    +
    <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener">Vue - Official</a>. Nếu bạn cần
    kiểm
    tra các component và trang web của mình, hãy xem xét
    <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
    và
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    /
    <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>
    .

    <br />

    Thông tin thêm có sẵn trong
    <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <router-link to="/projects">Dự án</router-link>
    </template>

    Nhận các công cụ và thư viện chính thức cho dự án của bạn:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, và
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. Nếu bạn cần thêm tài
    nguyên, chúng tôi đề xuất ghé thăm
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    .
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <router-link to="/contact">Liên hệ</router-link>
    </template>

    Gặp khó khăn? Đặt câu hỏi của bạn trên
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    (máy chủ Discord chính thức của chúng tôi), hoặc
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. Bạn
    cũng
    nên theo dõi tài khoản Bluesky chính thức
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    hoặc tài khoản X
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    để cập nhật tin tức mới nhất trong thế giới Vue.
  </WelcomeItem>
</template>

<script setup>
import WelcomeItem from "../Components/WelcomeItem.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";

const openReadmeInEditor = () => fetch("/__open-in-editor?file=README.md");
</script>

<style scoped>
.greetiDngs {
  margin-bottom: 2.5rem;
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
}
</style>