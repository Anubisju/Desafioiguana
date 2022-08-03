<template>
  <div class="container bg-light">
    <h1>Comentarios para farmacia: {{ comentarios[0].local_nombre }}</h1>
    <template v-if="comentarios.length > 0">
      <ul>
        <template v-for="(comentario, i) in comentarios" :key="i">
          <li v-if="comentario.local_id === this.message.local_id">
            {{ comentario.user }} - {{ comentario.message }}
          </li>
        </template>
      </ul>
    </template>
    <template v-else> <p>cargando...</p> </template>
  </div>
</template>
<!-- <table class="table">
      <thead>
        <th>Usuario</th>
        <th>Comentarios/th>
      </thead>
      </table> -->

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
    this.comentarios = this.getComentarios();
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
              user: a._delegate._document.data.value.mapValue.fields.user
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
