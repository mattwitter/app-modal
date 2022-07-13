<template>
  <v-container style="height:100%; max-width: 1400px;" class="d-flex flex-column">
    <div class="mt-2 mb-4">
      <!-- Enclosing div to prevent v-row from flex-growing -->
      <v-row>
        <v-col cols="auto">
          <h1>Home Page</h1>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>

    <v-btn @click="openModal">Click me
    </v-btn>

    <app-modal :value="openModalOverlay" :persistent="true" header-text="Modal Overlay" width="auto" min-width="600px">
      <template #content>
      </template>
      <template #action>
        <v-spacer></v-spacer>

        <v-btn @click="closeModal" depressed>
          Cancel
        </v-btn>

      </template>
    </app-modal>

    <v-col
    cols="4"
    >
    <app-date-picker 
    label="Start Date" 
    :date="gamesBetweenStartDate"
    @updateDate="newDate => gamesBetweenStartDate = newDate"
    ></app-date-picker>
    </v-col>
  </v-container>
</template>

<script>
import AppModal from "@/components/app/AppModal"
import AppDatePicker from "@/components/app/AppDatePicker"

export default {
  name: "Add",

  components: {
    AppModal,
    AppDatePicker
  },

  data: () => ({
    openModalOverlay: false
  }),

  computed: {

  },

  methods: {
    openModal() {
      this.openModalOverlay = true;
    },

    closeModal() {
      this.openModalOverlay = false;
    }
  },

  created() {
  
  },

}
</script>

<style lang="scss">
</style>