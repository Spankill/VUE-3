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
import InputText from 'primevue/inputtext'
import { Password } from 'primevue'
import Button from 'primevue'



export default {
    components: {
        InputText,
        Password,
        Button
    },
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

<style scoped>
.register {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.register h1 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
}

.p-inputtext,
.p-password {
    width: 100%;
    margin-bottom: 1rem;
}

.p-button {
    width: 100%;
    background-color: #42b983;
    border-color: #42b983;
}
</style>