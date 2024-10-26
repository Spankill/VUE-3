<template>
    <div>
        <nav class="navbar">
            <div class="logo animate"></div>
            <ul class="nav-links d-flex">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/minerals">Minerals</router-link></li>
                <li><router-link to="/post">Post</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
                <li class="login-button"><router-link to="/login">Login</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>

import logo from '@/assets/images/LOGO FINAL.png';

export default {
    data() {
        return {
            logoImage: logo
        };
    }
};
</script>

<style scoped>
.logo {
    background-image: url(v-bind(logoImage));
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 50px;
    margin-right: 2rem;
    cursor: pointer;
}

.navbar {
    text-decoration: none;
    background-color: var(--bg-color);
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 1;
    box-shadow: 0 2px 5px rgba(17, 136, 142, 0.791);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

ul {
    font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style-type: none;
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
    font-weight: bold;
    color: var(--secondary-color);
    text-shadow: 0 1px 20px rgba(45, 188, 195, 0.956);
}

li {
    margin: 0 1rem;
}


.login-button a {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.3s;
}

.login-button a:hover {
    transform: scale(1.25);
}
</style>