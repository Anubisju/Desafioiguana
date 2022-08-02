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
          <label>Nombre Farmacia</label>
          <input
            type="text"
            class="form-control"
            v-model="message.local_nombre"
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
  created() {
    this.message.local_id = this.$route.params.local_id;
  },

  methods: {
    guardarcomentarios(event) {
      event.preventDefault();
      db.collection("messages")
        .add(this.message)
        .then((ref) => {
          alert("Sus comentarios fueron enviados! " + ref);
          this.message.local_id = "";
          this.message.local_nombre = "";
          this.message.message = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
