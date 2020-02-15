<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-text-field outlined label="Cari Artikel" append-icon="place" />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(item, index) in 6" :key="index">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            class="mx-auto"
            outlined
            raised
            shaped
            :elevation="hover ? 20 : 2"
            @click="openPage('Detail')"
          >
            <v-list-item three-line>
              <v-list-item-avatar tile size="80" class="mt-10">
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain />
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">20/07/2020</div>
                <v-list-item-title class="headline mb-1">Judul</v-list-item-title>
                <v-list-item-subtitle class="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    openPage(nameRoute) {
      this.$router.push({
        name: nameRoute,
        params: { name: "Detail Artikel" }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>