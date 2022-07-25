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
import FarmTurno from "../FarmTurno";

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
      FarmTurno.getAll()
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
