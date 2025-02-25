<script>
import { ref } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext'; // Importa InputText desde PrimeVue

export default {
    components: {
        InputText, // Registra el componente
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