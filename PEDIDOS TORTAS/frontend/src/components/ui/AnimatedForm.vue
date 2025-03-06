<template>
    <div class="animated-form">
        <Card>
            <template #header>
                <h2>{{ title }}</h2>
            </template>
            <template #content>
                <slot></slot>
            </template>
            <template #footer>
                <BaseButton :label="submitButtonLabel" @click="$emit('submit')" />
            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import BaseButton from './BaseButton.vue';

export default {
    components: {
        Card,
        BaseButton,
    },
    props: {
        title: String,
        submitButtonLabel: {
            type: String,
            default: 'Submit',
        }
    }
};
</script>

<style scoped>
.animated-form {
    max-width: 500px;
    margin: auto;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>