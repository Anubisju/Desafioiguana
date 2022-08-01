<template>
  <div class="container">
    <h1>Farmacias de turno</h1>
    <br />
    <div class="control">
      <input
        v-model="search"
        type="text"
        class="input is-rounded btn"
        v-on:keyup.enter="searchData"
        placeholder="🔎Buscar Farmacia"
      />
      <!-- <button class="button" v-on:click="searchData">🔎Buscar Farmacia</button> -->
    </div>

    <table class="table">
      <thead>
        <th>Id</th>
        <th>Fecha</th>
        <th>Comuna</th>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Teléfono</th>
        <th>Horario de apertura</th>
        <th>Horario de cierre</th>
      </thead>
      <tbody>
        <tr v-for="item in farmacias" :key="item.local_id">
          <td>{{ item.local_id }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.comuna_nombre }}</td>
          <td>{{ item.local_nombre }}</td>
          <td>{{ item.local_direccion }}</td>
          <td>{{ item.local_telefono }}</td>
          <td>{{ item.funcionamiento_hora_apertura }}</td>
          <td>{{ item.funcionamiento_hora_cierre }}</td>
          <td>
            <router-link to="opiniones/:local_id , id: item.local_id ">
              <button class="btn btn-primary">Comentarios</button>
            </router-link>
            <router-view />

            <router-link to="mapa">
              <button class="btn btn-primary">Mapa</button>
            </router-link>
            <router-view />
          </td>
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
      // search: "",
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
    // searchData() {
    //   this.retrieveFarmacias();
    // },
  },
};
</script>
<style scoped>
div {
  background-color: transparent;
}

.table {
  background-color: transparent;
}

.btn {
  background-color: rgb(71, 152, 239);
}
</style>
