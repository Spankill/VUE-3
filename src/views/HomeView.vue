<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <main class="main bg-pan-bottom">
    <div class="landing-container">
      <h1 class="circle">Welcome to Our Site</h1>
    </div>
    <div>
      <table>
        <tr>
          <td>
            <div class="circle" style="--clr:#04fc43;">a</div>
          </td>
          <td>
            <div class="circle bg-pan-bottom" style="--clr:#ffeb3b;">v</div>
          </td>
          <td>
            <div class="circle" style="--clr:#ff0000;">b</div>
          </td>
        </tr>
      </table>
    </div>

  </main>
</template>
<style scoped>
.main {
  background: linear-gradient(199deg, var(--dark-color), var(--gray-color));
  margin-top: 80px;
  /* Espacio para el navbar */
  min-height: calc(100vh - 120px);
  /* Altura para mantener footer en su lugar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-pan-bottom {
  -webkit-animation: bg-pan-bottom 8s both;
  animation: bg-pan-bottom 8s both;
}

.landing-container {
  background: linear-gradient(135deg, var(rgb(98, 240, 98)), var(--gray-color));
  height: 200vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Animación de figuras circulares */
.circle {
  position: absolute;
  border-radius: 50%;
  animation: move 10s infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(50px, 50px);
  }

  100% {
    transform: translate(0, 0);
  }
}


/* Animación de fondo */
@-webkit-keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}
</style>