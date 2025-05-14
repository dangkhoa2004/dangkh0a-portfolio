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
                        <div v-if="loading" class="text-center text-gray-500">
                            Loading README...
                        </div>
                        <div v-else-if="error" class="text-center text-red-500">
                            {{ error }}
                        </div>
                        <div v-else v-html="renderedReadme"></div>
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
    readmePath: {
        type: String,
    },
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
const loading = ref(false);
const error = ref(null);

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const fetchReadme = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await fetch(props.readmePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch README. Status: ${response.status} ${response.statusText}`);
        }
        const readmeText = await response.text();
        renderedReadme.value = md.render(readmeText);
    } catch (e) {
        console.error('Error fetching or rendering README:', e);
        error.value = 'Failed to load README. Please check the file path and server configuration.';
        renderedReadme.value = '';
    } finally {
        loading.value = false;
    }
};

const handleOpen = () => {
    open.value = true;
    if (!renderedReadme.value && !loading.value && !error.value) {
        fetchReadme();
    }
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
</style>
