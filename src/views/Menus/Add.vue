<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          lg="10"
          offset-lg="1"
          md="8"
          offset-md="2"
          class="py-0 px-0 pr-0"
        >
          <v-card>
            <v-toolbar color="primary" dark flat>
              <v-btn icon @click="linkRoute('landingfirst')">
                <v-icon>fas fa-angle-left</v-icon>
              </v-btn>
              <v-toolbar-title>Tambah Artikel</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>

            <v-card-text>
              <!-- https://vuetifyjs.com/en/components/text-fields#text-fields -->
              <v-row>
                <v-col md="2" />
                <v-col>
                  <v-img
                    class="text-center"
                    :src="image"
                    aspect-ratio="1"
                    max-width="300"
                    max-height="300"
                  />
                </v-col>
                <v-col md="2" />
              </v-row>
              <v-row>
                <v-col md="8" offset-md="2">
                  <v-form>
                    <v-text-field
                      color="primary"
                      label="Title"
                      type="text"
                      outlined
                      autofocus
                    />

                    <v-text-field
                      color="primary"
                      label="Image"
                      type="text"
                      v-model="image"
                      outlined
                      autofocus
                    />

                    <v-textarea
                      color="primary"
                      label="Artikel"
                      type="text"
                      outlined
                      autofocus
                    />
                    <v-btn large class="buttonlogin" color="primary" dark block
                      >simpan</v-btn
                    >
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      image: "https://blog.sribu.com/wp-content/uploads/2014/05/blog-icon.png"
    };
  }
};
</script>
<style lang="scss" scoped></style>
