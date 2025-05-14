<template>
    <div>
        <button
            class="cursor-pointer readme-button inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto transition-colors duration-300"
            @click="handleOpen">
            <i class="fa fa-file-text fa-sm mr-2 text-blue-500"></i>
            {{ cardTitle }}
        </button>

        <transition name="fade">
            <div v-if="open"
                class="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                @click.self="handleClose">
                <div
                    class="readme-modal-content bg-white rounded-lg shadow-xl overflow-hidden max-w-3xl w-full h-5/6 transform transition-all duration-300 flex flex-col">
                    <div class="flex-shrink-0 flex justify-between items-center p-5 border-b border-gray-200">
                        <h3 class="font-semibold text-lg text-gray-900">
                            {{ modalTitle }}
                        </h3>
                        <button class="cursor-pointer p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                            @click="handleClose" aria-label="Close README modal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="h-5 w-5 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex-grow p-6 overflow-y-auto markdown-body">
                        <div v-html="renderedReadme"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MarkdownIt from 'markdown-it';

const props = defineProps({
    cardTitle: {
        type: String,
        default: 'View Project README'
    },
    modalTitle: {
        type: String,
        default: 'Project README'
    }
});

const open = ref(false);
const renderedReadme = ref('');

const rawMarkdownContent = `
# 🚀 Personal Portfolio - Cao Dang Khoa

Welcome to the source code of Cao Dang Khoa's personal portfolio website! This space is where I share my journey, skills, and the projects I've undertaken on my path to becoming a **Fullstack Developer**.

## ✨ Introduction

   This website is built with the primary purpose of:

- 📚 **Sharing the Journey:** Introducing my educational background, experience, and what has shaped me into the Fullstack Developer I am today.
- 📦 **Showcasing Projects:** Displaying key completed projects, accompanied by detailed descriptions and the list of technologies used.
- 🛠️ **Listing Skills:** Summarizing my professional skills, practical work experience, and notable achievements.
- ✍️ **Connecting Knowledge:** Sharing technical articles or personal blog posts (if any).
- 🎯 **Defining Goals:** Clearly presenting my development direction and future career objectives.
- 🤝 **Expanding Connections:** Providing contact information so people can easily connect.

## 🔑 Key Features

Explore the main sections on the portfolio site:

- 👤 **About Me:** The story about myself and my development journey.
- 📂 **Projects:** The products I've created, demonstrating capabilities through practice.
- 💡 **Technical Skills:** The technologies and tools I am proficient with.
- 💼 **Experience:** Valuable experiences in building applications.
- 🏆 **Certificates & Awards:** Recognition for efforts and achievements.
- 📝 **Blog/Technical Articles:** A place to share knowledge and personal perspectives (if any).
- 📈 **Career Goals:** The path I am heading towards in the future.
- 📬 **Contact:** Information for you to easily connect with me.

## 💻 Technologies Used

This portfolio project is built upon the foundation of modern technologies:

- ⚛️ **Frontend:**
    - Vue.js (JavaScript Framework)
    - React (JavaScript Library)
    - HTML5, CSS3, Javascript, Typescript
    - Bootstrap (CSS Framework)
    - Vite (Build Tool)
- ☕ **Backend:**
    - Java (Spring Boot Framework)
    - PHP
    - Python
- 🗄️ **Database:**
    - Database (Popular Database Management Systems)
- ⚙️ **Tools & Others:**
    - Git / Github (Version Control System)
    - Rest API (API Design Architecture)
    - Postman (API Testing Tool)

*Note: This list summarizes the main technologies used in the portfolio project and may include other technologies mentioned in the projects or skills sections.*

## 📁 Project Structure

Below is an overview of the project's directory structure:

\`\`\`
├── public/        \# Static files (favicon, index.html,...)
├── src/           \# Main source code for the Vue application
│  ├── assets/      \# Static resources (images, fonts, global styles,...)
│  ├── components/  \# Reusable Vue components
│  ├── router/      \# Routing configuration (Vue Router)
│  ├── screens/     \# Main application pages (views)
│  └── stores/      \# Global state management (using Pinia or Vuex)
├── index.html     \# Entry HTML file
├── LICENSE        \# License for the source code
├── package.json   \# Project information and dependencies list
├── package-lock.json \# Exact version lock for dependencies
├── README.md      \# README file describing the project
├── vite.config.js \# Configuration for Vite build tool
└── jsconfig.json  \# Configuration for JavaScript (for editor/IDE)
\`\`\`

## 🛠️ Quick Start

   To set up and run this project on your local machine, please follow these steps:

1.**Clone repository:** Copy the source code to your machine.
\`\`\`bash
git clone <your_repository_url>
\`\`\`
2.**Navigate into the project directory:**
\`\`\`bash
cd <your_project_folder_name>
\`\`\`
3.**Install dependencies:** Use your preferred package manager.
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`
4.**Run the project in development mode:**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

   The application will start and be accessible at \`http://localhost:<port>\` (usually 5173 or 3000).

5.**Build the project for deployment:**
\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`
   The production-optimized build result will be in the \`dist/\` directory.

## 📬 Contact

If you have any questions, want to discuss collaboration opportunities, or simply want to connect, feel free to reach out to me via:

- 📧 Email: [Your Email Address]
- 🔗 LinkedIn: [Your LinkedIn Profile Link]
- 🌐 Website: [Link to your deployed website (if any)]
- 🐙 GitHub: [Link to your GitHub Profile]

*Please replace the \`[...]\` placeholders with your actual contact information.*

## ⚖️ License

This project is released under the **[License Name, e.g., MIT License]**. Full details can be found in the [LICENSE](LICENSE) file.

`;

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

renderedReadme.value = md.render(rawMarkdownContent);

const handleOpen = () => {
    open.value = true;
};

const handleClose = () => {
    open.value = false;
};

const handleEscapeKey = (event) => {
    if (event.key === 'Escape' && open.value) {
        handleClose();
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active .readme-modal-content,
.fade-leave-active .readme-modal-content {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease;
}

.fade-enter-from .readme-modal-content {
    transform: scale(0.95);
    opacity: 0;
}

.fade-leave-to .readme-modal-content {
    transform: scale(0.95);
    opacity: 0;
}

.dark-mode .readme-button {
    border-color: var(--color-border);
    color: var(--color-text);
    background-color: var(--color-background-soft);
}

.dark-mode .readme-button:hover {
    background-color: var(--color-background-mute);
    border-color: var(--color-border-hover);
}

.readme-button i {
    color: #3b82f6;
}

.dark-mode .readme-button i {
    color: var(--vt-c-blue-dark, #60a5fa);
}

.readme-modal-content {
    max-height: 95vh;
}

.dark-mode .readme-modal-content {
    background-color: var(--color-background-soft);
}

.readme-modal-content .border-b {
    border-color: #e5e7eb;
}

.dark-mode .readme-modal-content .border-b {
    border-color: var(--color-border);
}

.readme-modal-content h3 {
    color: #1f2937;
}

.dark-mode .readme-modal-content h3 {
    color: var(--color-heading);
}

.readme-modal-content button svg {
    color: #6b7280;
}

.dark-mode .readme-modal-content button svg {
    color: var(--color-text);
}

.markdown-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.markdown-body pre {
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 6px;
    margin-bottom: 1em;
}

.markdown-body pre code {
    display: inline-block;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 100% !important;
    background-color: transparent !important;
    border-radius: 0 !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    color: #333;
}

.dark-mode .markdown-body code {
    background-color: rgba(110, 118, 129, 0.4);
    color: #c9d1d9;
}

.dark-mode .markdown-body pre {
    background-color: #161b22;
}

.dark-mode .markdown-body pre code {
    color: #c9d1d9;
}
</style>