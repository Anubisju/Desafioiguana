<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Deje su comentario</h3>
      <form @submit.prevent="guardarcomentarios">
        <div class="form-group">
          <label>Id</label>
          <input
            type="text"
            class="form-control"
            v-model="message.local_id"
            required
          />
        </div>

        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="message.nombre"
            required
          />
        </div>

        <div class="form-group">
          <label>Mensaje</label>
          <textarea
            class="form-control"
            v-model="message.message"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Guardar Comentarios</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/index";

export default {
  data() {
    return {
      message: {},
    };
  },
  //   created() {
  //     let dbRef = db.collection("messages").doc(this.$route.params.item.local_id);
  //     dbRef
  //       .get()
  //       .then((doc) => {
  //         this.message = doc.data();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  methods: {
    guardarcomentarios(event) {
      event.preventDefault();
      db.collection("messages")
        .doc(this.$route.params.id)
        .update(this.message)
        .update(this.nombre)
        .then(() => {
          console.log("Mensaje actualizado!");
          this.$router.push("/opiniones");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
