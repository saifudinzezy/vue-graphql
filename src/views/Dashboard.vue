<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item class="tile" @click="openPage('Profil', 'Profil')">
            <v-list-item-action>
              <v-icon color="blue">mdi-account-tie</v-icon>
            </v-list-item-action>
            <h4 class="blue--text">Profil</h4>
          </v-list-item>

          <v-list-item class="tile" @click="openPage('Blog', 'Blog')">
            <v-list-item-action>
              <v-icon color="blue">mdi-comment-text-multiple-outline</v-icon>
            </v-list-item-action>
            <h4 class="blue--text">Blog</h4>
          </v-list-item>

          <v-list-item class="tile" @click="openPage('About', 'Tentang')">
            <v-list-item-action>
              <v-icon color="blue">mdi-bell</v-icon>
            </v-list-item-action>
            <h4 class="blue--text">Tentang</h4>
          </v-list-item>

          <v-list-item class="tile" @click="openPage('Login', 'name')">
            <v-list-item-action>
              <v-icon color="blue">mdi-location-exit</v-icon>
            </v-list-item-action>
            <h4 class="blue--text">Sign Out</h4>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" dark class="blue-text">
      <v-toolbar-title class="blue--text">
        <!-- <b>{{$route.params.name}}</b> -->
        <b>{{title}}</b>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="blue--text"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-container>
        <!-- content -->
        <content-dashboard></content-dashboard>
        <!-- end content -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ContentDashboard from "./ContentDashboard.vue";

export default {
  data: () => ({
    drawer: false,
    group: null,
    toolbar: "",
    title: "BERANDA"
  }),
  components: {
    ContentDashboard
  },
  methods: {
    openPage(nameRoute, nameBar) {
      this.$router.push({ name: nameRoute });
      this.title = nameBar;
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}

.marginTop {
  margin-top: 10px;
}
.margin {
  margin-left: 15px;
  margin-right: 15px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: center;
}
.tile {
  margin: 5px;
  border-radius: 4px;
}
.tile:hover {
  background: #fff3e0;
}
.tile:active {
  background: #e91e63;
}
</style>