<template>
  <div class="container">
    <h1>Obtener datos desde web api</h1>
    <p>Nos conectamos mediante axios a una api en firebase y la consumimos</p>
    <table class="table">
      <thead>
        <th>id</th>
        <th>fecha</th>
        <th>region</th>
        <th>comuna</th>
        <th>nombre</th>
        <th>direccion</th>
        <th>telefono</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in farmacias" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.fk_region }}</td>
          <td>{{ item.fk_comuna }}</td>
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
  },
};
</script>
