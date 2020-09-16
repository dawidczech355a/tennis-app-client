<template>
  <form>
    <label class="input-label">
      {{inputLabel}}
      <input
        :placeholder="placeholder"
        :type="inputType"
        class="input-wrapper"
        @blur="onBlurInput"
        v-model="inputValue"
      />
    </label>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomInput',
  props: {
    placeholder: String,
    inputType: String,
    inputLabel: String,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    onBlurInput() {
      console.log('inputValue ', this.inputValue);
      this.$emit('blur-input', this.inputValue);
    },
  },
});
</script>

<style lang="scss">
  @import "../assets/style";

  .input-label {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 12px;
    font-weight: $medium;
    line-height: 36px;

    .input-wrapper {
      font-size: 18px;
      padding: 21px 24px 23px 24px;
      border: 2px solid $green;
      width: 500px;
    }

    .input-wrapper:focus {
      box-shadow: inset 0 0 1em $green, 0 0 1em $green-main;
    }
  }
</style>
