<template>
  <div class="container">
    <h1>Farmacias del Pais</h1>
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
  <br />
  <!-- aqui les deje un for que muestra las farmacias de turno
  (ahí lo ordenan como quieran ^^) -->
  <h2>Listado de farmacias</h2>
  <ul>
    <li v-for="item in farmaciasDeTurno" :key="item.id">
      {{ item.local_nombre }} => {{ item.localidad_nombre }}
    </li>
  </ul>
</template>

<script>
//import { createSSRApp } from "vue";
import FarmTurno from "../FarmTurno";
import FarmPais from "../FarmPais";

export default {
  name: "AboutView",
  data() {
    return {
      farmacias: [],
      farmaciasDeTurno: [],
    };
  },
  created() {
    this.retrieveOtherFarmacias();
    this.retrieveFarmacias();
  },

  methods: {
    retrieveOtherFarmacias() {
      FarmTurno.getAll()
        .then((response) => {
          this.farmaciasDeTurno = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },

    retrieveFarmacias() {
      FarmPais.getAll()
        .then((response) => {
          this.farmacias = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style scoped>
div {
  background-color: azure;
}
</style>
