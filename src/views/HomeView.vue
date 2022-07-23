<template>
  <div class="container">
    <h1>Farmacias de turno</h1>
    <br />
    <table class="table">
      <thead>
        <th>fecha</th>
        <th>comuna</th>
        <th>nombre</th>
        <th>direccion</th>
        <th>telefono</th>
      </thead>
      <tbody>
        <tr v-for="item in farmacias" :key="item.id">
          <td>{{ item.fecha }}</td>
          <td>{{ item.comuna_nombre }}</td>
          <td>{{ item.local_nombre }}</td>
          <td>{{ item.local_direccion }}</td>
          <td>{{ item.local_telefono }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FarmService from "../FarmService";
export default {
  name: "HomeView",
  data() {
    return {
      farmacias: [],
    };
  },
  created() {
    this.retrieveFarmacias();
  },

  methods: {
    retrieveFarmacias() {
      FarmService.getAll()
        .then((response) => {
          this.farmacias = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /*
    1. capturar la comuna que quiero buscar
    2. mostrar el input de la comuna que necesito encontrar
    3. almacenar ese valor del input en una variable
    4. hacer una función de busqueda 
    (tiene que ser como lo que hicimos en el navegador)
    5. mostrar variable nueva de datos filtrados de las farmacias
    (this.farmacias => this.filtroFarmacias)
    6. reeemplazar que te muestre solo la farmacia que viene en el filtro

    => puedes usar console.log("soy tu amigo :3")
    */
  },
};
</script>
<style scoped>
div {
  background-color: azure;
}
</style>
