<template>
    <div class="register">
        <h1>REGISTRO</h1>
        <form @submit.prevent="register">
            <InputText v-model="name" placeholder="Nombre" />
            <InputText v-model="email" placeholder="Correo electrónico" />
            <InputText v-model="password" placeholder="Contraseña" />
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>


<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const name = ref('');
        const email = ref('');
        const password = ref('');

        const register = async () => {
            try {
                const response = await axios.post('http://localhost:3001/register',
                    {
                        name: name.value,
                        email: email.value,
                        password: password.value
                    });
                alert('Usuario registrado: ' + response.data)
            }
            catch (error) {
                alert('error: ' + error.response.data)
            }
        }
        return {
            name,
            email,
            password,
            register
        }
    }
}
</script>