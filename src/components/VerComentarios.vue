<template>
  <h1>Comentarios para id: {{ this.message.local_id }}</h1>
  <ul style="border: 1px solid red">
    <template v-for="(comentario, i) in comentarios" :key="i">
      <li v-if="comentario.local_id === this.message.local_id">
        {{ comentario.message }}
      </li>
    </template>
  </ul>
</template>
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
