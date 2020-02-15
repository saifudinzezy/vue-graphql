<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <!-- <v-btn icon @click="openPage('Home')">
                  <v-icon>fas fa-angle-left</v-icon>
                </v-btn>-->
                <v-toolbar-title>
                  <b>Login</b>
                </v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-row class="12" sm="8" md="4">
                    <v-col cols="4" />
                    <v-col cols="4">
                      <v-img
                        src="https://blog.sribu.com/wp-content/uploads/2014/05/blog-icon.png"
                        aspect-ratio="1"
                        max-width="500"
                        max-height="300"
                      />
                    </v-col>
                    <v-col cols="4" />

                    <v-col cols="12" class="primary--text">
                      <h2 class="text-center">Halo! Apa Kabar?</h2>
                    </v-col>
                  </v-row>

                  <v-text-field
                    color="primary"
                    label="Email"
                    v-model="email"
                    type="text"
                    :rules="[rulesEmail.required]"
                    outlined
                    autofocus
                  />

                  <v-text-field
                    :append-icon="pas1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    :rules="[rulesPassword.required, rulesPassword.min]"
                    :type="pas1 ? 'text' : 'password'"
                    v-model="password"
                    color="primary"
                    outlined
                    label="Kata Sandi"
                    class="input-group--focused"
                    @click:append="pas1 = !pas1"
                    @keyup.enter="login"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-row class="xs-12" sm="8" md="4">
                <v-col cols="7" />
                <v-col cols="5">
                  <v-card-actions class="justify-right">
                    <div>
                      <!-- <router-link class="primary--text" :to="'/home'">
                        <b>Lupa kata sandi?</b>
                      </router-link>-->
                    </div>
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn large color="primary" block dark @click="openPage('Dashboard')">Masuk</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      pas1: false,
      rulesEmail: {
        required: v => !!v || "Email harus diisi"
      },
      rulesPassword: {
        required: value => !!value || "Password harus di isi!",
        min: v => v.length >= 8 || "Password minimal 8 karakter"
      }
    };
  },
  methods: {
    openPage(nameRoute) {
      this.$router.push({ name: nameRoute, params: { name: "Blog" } });
    }
  }
};
</script>
