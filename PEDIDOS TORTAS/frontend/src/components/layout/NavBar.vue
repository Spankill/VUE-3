<template>
    <div class="navbar">
        <Button label="Inicio" class="p-button-text" @click="$router.push('/')" />
        <Button label="Login" class="p-button-outlined p-button-warning" @click="$router.push('/login')" />

    </div>
</template>

<script>

import Button from "primevue/button";

export default {
    components: {
        Button
    }
}

</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

.p-button-text {
    font-weight: bold;
}

.p-button-outlined {
    border: 1px solid #dee2e6;
    color: #343a40;
}

.p-button-warning {
    background-color: #ffc107;
    color: #ffffff;
}

.p-button-warning:hover {
    background-color: #fa8231;
}

.p-button-warning:focus {
    background-color: #f8312f;
}

.p-button-warning:active {
    background-color: #f52c3e;
}

.p-button-warning:disabled {
    background-color: #f8f9fa;
    color: #cccccc;
    border: 1px solid #cccccc;
}
</style>