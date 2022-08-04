<template>
  <div class="container-fluid">
    <h1>Farmacias de turno</h1>
    <br />
    <div class="control">
      <input
        type="text"
        class="input is-rounded btn"
        placeholder="🔎Buscar Farmacia"
        @input="filtraFarmacias($event)"
        v-model.lazy="farmaciaNombre"
      />
      <br /><br />
      <div class="mover">
        <input
          type="text"
          class="input is-rounded btn"
          placeholder="🔎Buscar Comuna"
          @input="filtraComunas($event)"
          v-model.lazy="comunaNombre"
        />
      </div>
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
        <tr v-for="item in farmaciasFiltradas" :key="item.local_id">
          <td>{{ item.local_id }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.comuna_nombre }}</td>
          <td>{{ item.local_nombre }}</td>
          <td>{{ item.local_direccion }}</td>
          <td>{{ item.local_telefono }}</td>
          <td>{{ item.funcionamiento_hora_apertura }}</td>
          <td>{{ item.funcionamiento_hora_cierre }}</td>
          <td>
            <router-link
              :to="{
                name: 'opiniones',
                params: {
                  local_id: item.local_id,
                  local_nombre: item.local_nombre,
                  local_direccion: item.local_direccion,
                },
              }"
              class="btn btn-primary"
              >Comentarios
            </router-link>
            <br />
            <br />
            <router-link
              :to="{
                name: 'ver',
                params: {
                  local_id: item.local_id,
                  local_nombre: item.local_nombre,
                  local_direccion: item.local_direccion,
                },
              }"
              class="btn btn-primary"
              >Ver Comentarios
            </router-link>

            <!-- 
            <router-view /> 
            <router-link to="mapa">
              <button class="btn btn-primary">Mapa</button>
            </router-link>
            <router-view />  -->
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
      farmaciasFiltradas: [],
      listafarm: [],
      farmaciaNombre: "",
      comunaNombre: "",
    };
  },
  created() {
    this.retrieveFarmacias();
  },
  methods: {
    filtraFarmacias(event) {
      this.farmaciasFiltradas = this.farmacias;
      this.comunaNombre = "";
      if (event.target.value !== "") {
        const temp = this.farmacias.filter((farmacia) =>
          farmacia.local_nombre
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
        this.farmaciasFiltradas = temp;
      } else {
        this.farmaciasFiltradas = this.farmacias;
      }
      console.log(
        "Cambia a => ",
        event.target.value,
        JSON.parse(JSON.stringify(this.farmaciasFiltradas))
      );
    },
    filtraComunas(event) {
      this.farmaciasFiltradas = this.farmacias;
      this.farmaciaNombre = "";
      if (event.target.value !== "") {
        const temp = this.farmacias.filter((farmacia) =>
          farmacia.comuna_nombre
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
        this.farmaciasFiltradas = temp;
      } else {
        this.farmaciasFiltradas = this.farmacias;
      }
      console.log(
        "Cambia a => ",
        event.target.value,
        JSON.parse(JSON.stringify(this.farmaciasFiltradas))
      );
    },
    retrieveFarmacias() {
      FarmTurno.getAll()
        .then((response) => {
          this.farmacias = response.data;
          this.farmaciasFiltradas = response.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    searchFarmacia: function (event) {
      event.preventDefault();
      console.log(event.target.value);
      console.log(this.farmacias);
      this.farmacias = this.farmacias.filter(
        (f) => f.comuna_nombre === event.target.value
      );
    },
  },
};
</script>
<style scoped>
div {
  background-color: white;
  opacity: 0.8;
}

.table {
  background-color: white;
  color: black;
  opacity: 0.8;
}

.btn {
  background-color: rgb(71, 152, 239);
}
</style>
