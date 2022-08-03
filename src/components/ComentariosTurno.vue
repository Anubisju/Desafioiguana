<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Deje su comentario</h3>
      <h4>{{ $store.state.user.email }}</h4>
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
          <label>Dirección</label>
          <input
            type="text"
            class="form-control"
            v-model="message.local_direccion"
            required
          />
        </div>

        <div class="form-group">
          <label>Comentarios</label>
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

import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  data() {
    return {
      message: {},
    };
  },
  created() {
    console.log("created ComentariosTurno");
    this.message.local_id = this.$route.params.local_id;
    this.message.local_nombre = this.$route.params.local_nombre;
    this.message.local_direccion = this.$route.params.local_direccion;
    this.message.user = this.$store.state.user.email;
  },

  methods: {
    guardarcomentarios(event) {
      event.preventDefault();
      db.collection("messages")
        .add(this.message)
        .then((ref) => {
          alert("Sus comentarios fueron enviados! ", this.message, ref);
          this.message.local_id = "";
          this.message.local_nombre = "";
          this.message.local_direccion = "";
          this.message.message = "";
          // this.message.user = {{ $store.state.user.email }};
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
