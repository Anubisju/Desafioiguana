<template>
  <nav class="navbar bg-light">
    <div class="container-fluid primernav">
      <a class="navbar-brand" href="#">
        <img
          src="../src/assets/logofarmacias.jpeg"
          alt=""
          width="150"
          height="150"
        />
        BIENVENIDOS AL PORTAL OFICIAL DE BUSQUEDAS DE FARMACIAS A NIVEL NACIONAL
      </a>
    </div>
  </nav>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> <br />
    <!-- <router-link to="/aboutView">About</router-link> -->
    Bienvenido: {{ $store.state.user.email }}
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button
        class="btn btn-primarylogout me-md-2"
        type="button"
        @click="$store.dispatch('logout')"
      >
        Logout
      </button>
    </div>
  </div>
  <router-view />
  <div class="quintasesion">
    <div class="container-fluid">
      <h7
        >Designed and built with all the love in the world by the Bootstrap team
        with the help of our contributors. Currently v4.3.1. Code licensed MIT.
        docs CC BY 3.0.</h7
      >
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
.btn-primarylogout {
  background-color: rgb(125, 142, 164) !important;
}
.primernav {
  background-image: url("../src/assets/fondopantalla.jpg") !important;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(52, 66, 84);
}
</style>
