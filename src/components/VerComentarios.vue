<template>
  <div class="container bg-light">
    <h1>Comentarios para farmacia: {{ comentarios[0].local_nombre }}</h1>
    <template v-if="comentarios.length > 0">
      <ul>
        <template v-for="(comentario, i) in comentarios" :key="i">
          <li v-if="comentario.local_id == this.message.local_id">
            {{ comentario.message }} - {{ comentario.usuario }}
          </li>
        </template>
      </ul>
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
ul {
  padding: 0;
}
ul > li {
  list-style: none;
  padding: 1em;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  margin-top: 5px;
}
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
              usuario:
                a._delegate._document.data.value.mapValue.fields.user
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
