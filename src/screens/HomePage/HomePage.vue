<script setup>
import TheWelcome from "./Ingredient/TheWelcome.vue";
import ButtonSkills from "./Components/ButtonSkills.vue"
</script>

<template>
  <header class="leading-normal py-8 flex flex-col items-center px-[calc(var(--section-gap)/2)] text-center">
    <img alt="Logo của Cao Dang Khoa" class="logo block mx-auto mb-6 rounded-full w-24 h-24 object-cover"
      src="@/assets/avatar.jpg" width="96" height="96" />
    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Cao Dang Khoa
      </h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Fullstack Developer mới tốt nghiệp
      </p>
      <ul class="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 text-left pt-3">
        <li class="pt-3">
          <span class="font-semibold">Kinh nghiệm:</span> Xây dựng giao diện
          người dùng thân thiện và hệ thống backend mạnh mẽ cho web và ứng dụng.
        </li>
        <li class="pt-3">
          <span class="font-semibold">Kỹ năng chuyên môn:</span>
          <span class="inline-flex flex-wrap gap-2 mt-1">
            <ButtonSkills text="Java (Spring Boot)" backgroundColor="#bae6fd"></ButtonSkills>
            <ButtonSkills text="PHP" backgroundColor="#bbf7d0"></ButtonSkills>
            <ButtonSkills text="Vue.js" backgroundColor="#ede7f6"></ButtonSkills>
            <ButtonSkills text="React" backgroundColor="#fef08a"></ButtonSkills>
            <ButtonSkills text="HTML" backgroundColor="#fee2e2"></ButtonSkills>
            <ButtonSkills text="CSS" backgroundColor="#ccfbf1"></ButtonSkills>
            <ButtonSkills text="Javascript" backgroundColor="#fde68a"></ButtonSkills>
            <ButtonSkills text="Vue.js" backgroundColor="#ede7f6"></ButtonSkills>
            <ButtonSkills text="GitHub" backgroundColor="#e5e7eb"></ButtonSkills>
            <ButtonSkills text="Rest API" backgroundColor="#f0f9ff"></ButtonSkills>
            <ButtonSkills text="Python" backgroundColor="#f9f7d9"></ButtonSkills>
            <ButtonSkills text="Typescript" backgroundColor="#dcfce7"></ButtonSkills>
            <ButtonSkills text="Git" backgroundColor="#e5e7eb"></ButtonSkills>
            <ButtonSkills text="HTML" backgroundColor="#fee2e2"></ButtonSkills>
            <ButtonSkills text="CSS" backgroundColor="#ccfbf1"></ButtonSkills>
            <ButtonSkills text="Bootstrap" backgroundColor="#dbeafe"></ButtonSkills>
            <ButtonSkills text="React" backgroundColor="#fef08a"></ButtonSkills>
            <ButtonSkills text="Postman" backgroundColor="#f5f3ff"></ButtonSkills>
            <ButtonSkills text="Database" backgroundColor="#e0f2fe"></ButtonSkills>
            <ButtonSkills text="Java" backgroundColor="#bae6fd"></ButtonSkills>
            <ButtonSkills text="PHP" backgroundColor="#bbf7d0"></ButtonSkills>
            <ButtonSkills text="Javascript" backgroundColor="#fde68a"></ButtonSkills>
            <ButtonSkills text="Typescript" backgroundColor="#dcfce7"></ButtonSkills>
          </span>
        </li>
        <li class="pt-3">
          <span class="font-semibold">Phẩm chất:</span> Tinh thần làm việc cao,
          trung thực, kỹ năng hợp tác chủ động.
        </li>
        <li class="pt-3">
          <span class="font-semibold">Mục tiêu:</span> Đóng góp cho đội ngũ năng
          động và học hỏi công nghệ mới nhanh chóng.
        </li>
      </ul>
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>
