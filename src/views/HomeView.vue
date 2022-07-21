<template>
  <main class="home">
    <!-- Bienvenido: {{ $store.state.user.email }} -->
    <h1>SELECCIONE LAS FARMACIAS QUE DESEA VER..</h1>
  </main>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary botonhome" type="button">FARMACIAS</button>
    <button class="btn btn-primary botonhome" type="button">
      FARMACIAS DE TURNO
    </button>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.botonhome {
  color: rgb(56, 61, 61);
  background-color: rgb(108, 155, 209) !important;
  border-color: rgb(107, 143, 189);
}
</style>
