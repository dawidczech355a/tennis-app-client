<template>
  <div>
    <button class="button" @click="handleClick" :disabled="isDisabled()">
      {{buttonTitle}}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    buttonTitle: String,
    isDisabled: Function,
  },
  methods: {
    handleClick() {
      this.$emit('handle-click-button');
    },
  },
});
</script>

<style lang="scss">
  @import "../assets/style";

  .button {
    background-color: $green-main;
    width: 100%;
    height: 64px;
    color: $white;
    border: none;
  }

  .button:hover {
    cursor: pointer;
  }
</style>
