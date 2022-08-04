<template>
  <div class="container bg-light">
    <h1>
      Comentarios para farmacia: {{ this.$route.params.local_nombre }} id:
      {{ this.$route.params.local_id }}
    </h1>

    <template v-if="comentarios.length > 0">
      <table class="table">
        <thead>
          <th>Comentario</th>
          <th>Usuario</th>
          <th>Dirección</th>
        </thead>

        <tbody>
          <template v-for="(comentario, i) in comentarios" :key="i">
            <tr v-if="comentario.local_id === this.message.local_id">
              <td>{{ comentario.message }}</td>
              <td>{{ comentario.usuario }}</td>
              <td>{{ comentario.local_direccion }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </template>
    <template v-else> <p>cargando...</p> </template>
  </div>
</template>
<style lang="css">
.container {
  padding-top: 5px;
  padding-bottom: 2em;
}
h1 {
  margin-top: 12px;
}
.table {
  list-style: none;
  padding: 1em;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  margin-top: 5px;
}
thead {
  color: #000000;
  border: 2px solid rgb(32, 110, 255);
  border-left: 5px rgb(183, 15, 15);
}
/* .table > tr {
  list-style: none;
  padding: 1em;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  margin-top: 5px;
} */
</style>
<script>
import { db } from "../firebase/index";

export default {
  data() {
    return {
      message: {},
      comentarios: [] || undefined,
      mComentarios: [] || undefined,
    };
  },
  created() {
    this.message.local_id = this.$route.params.local_id;
    /* this.message.local_nombre = this.$route.params.local_nombre;
    this.message.local_direccion = this.$route.params.local_direccion; */
    this.comentarios = this.getComentarios().filter(
      (c) => this.message.local_id == c.local_id
    );
  },
  methods: {
    getComentarios() {
      const ref = db.collection("messages").get();
      const listComentarios = [];
      ref
        .then((r) => {
          r.forEach((a) =>
            this.comentarios.push({
              local_id:
                a._delegate._document.data.value.mapValue.fields.local_id
                  .stringValue,
              local_nombre:
                a._delegate._document.data.value.mapValue.fields.local_nombre
                  .stringValue,
              message:
                a._delegate._document.data.value.mapValue.fields.message
                  .stringValue,
              usuario:
                a._delegate._document.data.value.mapValue.fields.user
                  .stringValue,
              local_direccion:
                a._delegate._document.data.value.mapValue.fields.local_direccion
                  .stringValue,
            })
          );
        })
        .catch((r) => {
          console.log(r);
        });
      return listComentarios;
    },
  },
};
</script>
