<template>
  <v-app id="app">
    <v-row no-gutters>
      <v-col>
        <router-view />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {

  },

  data: () => ({
    //
  }),
}

</script>

<style lang="scss">
</style>
