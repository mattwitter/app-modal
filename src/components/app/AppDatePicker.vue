<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="dateModel"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateModel"
        :label="label"
        prepend-icon="mdi-calendar"
        :disabled="disabled"
        readonly
        hide-details
        v-bind="attrs"
        v-on="on"
        class="pt-0 mt-0"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="dateModel"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        depressed
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        depressed
        color="primary"
        @click="$refs.menu.save(dateModel)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "AppDatePicker",

  props: {
    label: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data: () => ({
    menu: false,
  }),

  computed: {
    dateModel: {
      get() {
        return this.date
      },
      set(newDate) {
        this.$emit('updateDate', newDate)
      }
    }
  }
}
</script>