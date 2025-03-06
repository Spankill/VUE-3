<template>
    <div class="base-input">
        <label :class="{ 'active': isFocused || value }"> {{ label }}</label>
        <InputText v-model="internalValue" :placeholder="placeholder" @focus="isFocused = true"
            @blur="isFocused = false" @class="inputClass" />
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import InputText from 'primevue/inputtext'

export default {
    components: {
        InputText
    },
    props: {
        modelValue: { type: String, default: '' },
        label: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        inputClass: { type: String, default: '' }
    },
    setup(props, { emit }) {
        const internalValue = ref(props.modelValue)
        const isFocused = ref(false)

        watch(internalValue, (newVal) => {
            emit('input', newVal)
        })

        return {
            internalValue,
            isFocused
        }
    }
}
</script>

<style scoped>
.base-input {
    position: relative;
    margin-bottom: 1.5rem;
}

label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    color: #666;
    pointer-events: none;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid#ccc;
    border-radius: 4px;
}

input:focus {
    border-color: #42b983;
    outline: none;
}

.active {
    top: 0;
    font-size: 0.8rem;
    color: #42b983;
    background: white;
    padding: 0 5px;
}
</style>