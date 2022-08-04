<template>
  <main class="login">
    <section class="register">
      <div class="row">
        <div class="col-8">
          <form @submit.prevent="register">
            <h>¿Ingresando por primera vez? por favor registrese</h> <br />
            <h2>Registro Usuarios</h2>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control-plaintext"
                  placeholder="email@example.com"
                  v-model="register_form.email"
                  id="staticEmail"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  v-model="register_form.password"
                />
                <br />
              </div>
              <button
                class="btn btn-primaryregistrar"
                type="submit"
                value="registrar"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
        <div class="col-4">
          <form class="login" @submit.prevent="login">
            <h2>INGRESO</h2>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control-plaintext"
                  placeholder="email@example.com"
                  v-model="login_form.email"
                  id="staticEmail"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  v-model="login_form.password"
                />

                <div class="mb-4 form-check">
                  <input
                    type="checkbox"
                    name="connected"
                    class="form-check-input"
                  />
                  <label for="connected" class="form-check-label"
                    >recordar mi contraseña</label
                  >
                </div>
              </div>
              <button class="btn btn-primarylogin" type="submit" value="Login">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style>
body {
  background-image: url("../assets/fondopantalla.jpg") !important;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.btn-primaryregistrar {
  color: rgb(229, 243, 243) !important;
  background-color: rgb(108, 155, 209) !important;
  border-color: rgb(107, 143, 189);
  width: 80% !important;
}
.btn-primarylogin {
  color: rgb(229, 243, 243) !important;
  background-color: rgb(108, 155, 209) !important;
  border-color: rgb(107, 143, 189);
  width: 100% !important;
}
.forms {
  display: flex;
  min-height: 100vh;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}

form.register {
  color: #fff;
  background-color: rgb(108, 66, 245);
  background-image: linear-gradient(
    to bottom right,
    rgb(108, 66, 245) 0%,
    rgb(108, 66, 245) 100%
  );
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
}

form.login input[type="submit"] {
  background-color: rgb(108, 66, 245);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

form.register input[type="submit"] {
  background-color: #fff;
  color: rgb(108, 66, 245);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
.col-sm-10 {
  background-color: white;
  opacity: 0.8;
  border: #2c3e50;
  border: 10px;
}
.login {
  background-color: white;
  opacity: 0.8;
}
</style>
