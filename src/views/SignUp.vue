<template>
  <section class="section sign-up">
    <div class="container sign-up-wrapper">
      <CustomInput
        placeholder="Enter your email address"
        input-type="email"
        input-label="E-mail address"
      />
      <CustomInput
        placeholder="Enter password"
        input-type="password"
        input-label="Password"
      />
      <CustomInput
        placeholder="Confirm password"
        input-type="password"
        input-label="Confirm password"
      />
      <CustomInput
        placeholder="Enter your phone number"
        input-type="number"
        input-label="Phone number"
      />
      <ButtonComponent
        :is-disabled="buttonDisabled"
        button-title="Create Account"
        @handle-click-button="createAccount"
        class="sign-up-button"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from '@/components/CustomInput.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    CustomInput,
    ButtonComponent,
  },
  methods: {
    createAccount() {
      console.log('createAccount!');
    },
    buttonDisabled() {
      return false;
    },
  },
});
</script>

<style lang="scss">
  @import "../assets/style";

  .sign-up {
    height: 100vh;
    background-color: $grey-1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sign-up-wrapper {
      background-color: $white;
      padding: 70px 60px;
      border-radius: 10px;
    }

    .sign-up-button {
      margin-top: 38px;
    }
  }
</style>
