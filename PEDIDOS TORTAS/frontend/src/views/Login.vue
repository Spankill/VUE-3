<template>
    <div class="login">
        <h1>Login</h1>
        <form action="">
            <BaseInput v-model="email" placeholder="nombre@dominio.com" />
            <i class="pi pi-user" style="color: green"></i>
            <i class="pi pi-spin pi-cog" style="color: green; font-size: 2rem"></i>
            <InputText v-model="password" type="password" placeholder="Password" :feedback="false" toggleMask fluid />
            <i class="pi pi-lock" style="color: green ; font-size: 2rem"></i>
            <button class="p-button-success" type="button" @click="login" label="Registrarse">Login</button>
            <p v-if="error" style="color: red;">{{ error }}</p>
            <p>
                ¿No tienes una cuenta?
                <router-link to="/register">Regístrate aquí</router-link>
            </p>
        </form>
    </div>
</template>



<script>
import { ref } from 'vue';
import axios from 'axios';

import InputText from 'primevue/inputtext'; // Importa InputText desde PrimeVue
import Button from 'primevue/button';


//registro local de componentes de prime en vistas especificas
import BaseInput from '@/components/base/BaseInput.vue';
//import BaseButton from './components/base/BaseInput.vue';


export default {
    components: {
        InputText, // Registra el componente
        Button, // Registra el componente
        BaseInput, // Registra el componente
        //BaseButton, // Registra el componente
    },
    setup() {
        const email = ref('');
        const password = ref('');

        const login = async () => {
            try {
                const response = await axios.post('http://localhost:3001/login', {
                    email: email.value,
                    password: password.value,
                });
                localStorage.setItem('token', response.data.token);
                alert('Login exitoso');
            } catch (error) {
                alert('Error: ' + error.response.data);
            }
        };

        return {
            email,
            password,
            login,
        };
    },
};
</script>

<style scoped>
.login {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
}

/* Estilos para InputText y BaseInput */

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}

.p-button-success {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
</style>