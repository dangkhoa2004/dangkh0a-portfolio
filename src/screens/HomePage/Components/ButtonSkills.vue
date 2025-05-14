<template>
    <button class="button" :style="{ backgroundColor: backgroundColor }">
        <p class="text">{{ text }}</p>
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: '#181717'
        }
    }
};
</script>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #181717;
    outline: 1px #181717 solid;
    outline-offset: -1px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 400ms;
}

.button .text {
    color: black;
    font-weight: 700;
    font-size: 12px;
    transition: 400ms;
}

.button svg path {
    transition: 400ms;
}

.button:hover {
    background-color: transparent;
}

.button:hover .text {
    color: blue;
}

.button:hover svg path {
    fill: #181717;
}
</style>