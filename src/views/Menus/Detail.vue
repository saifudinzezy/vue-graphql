<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-img
          :src="`https://picsum.photos/510/300?random`"
          :lazy-src="`https://picsum.photos/510/300?random`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-row align="center" justify="center">
          <v-col cols="10" md="10">
            <div class="about mt-2">
              <h1>Judul</h1>
              20/08/2020
            </div>
          </v-col>
          <v-col cols="2" md="2">
            <v-icon
              large
              color="teal darken-2"
              v-if="bookmark"
              @click="bookmark = false"
              >mdi-bookmark-plus</v-icon
            >
            <v-icon large color="teal darken-2" v-else @click="bookmark = true"
              >mdi-bookmark-plus-outline</v-icon
            >
          </v-col>
        </v-row>

        <v-divider />
        <p class="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col>
        <v-btn
          rounded
          color="primary"
          dark
          class="mr-5"
          @click="openPage('Edit')"
          >Edit</v-btn
        >
        <v-btn rounded color="error" dark>Hapus</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      bookmark: false
    };
  },
  methods: {
    openPage(nameRoute) {
      this.$router.push({ name: nameRoute, params: { name: "Edit Artikel" } });
    }
  }
};
</script>
<style lang="scss" scoped></style>
