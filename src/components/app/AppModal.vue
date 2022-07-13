<template>
  <v-dialog
    v-model="value"
    :width="width"
    :persistent="persistent"
  >
    <v-card
      style="border-radius: 8px"
      :style="{minWidth: minWidth}"  
    >
      <v-card-title class="black white--text">
        {{ headerText }}
      </v-card-title>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
      <v-card-actions>
        <slot name="action"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AppModal",
  
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    persistent: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    minWidth: {
      type: String,
      default: "0",
      required: false,
    },
    headerText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>

</style>