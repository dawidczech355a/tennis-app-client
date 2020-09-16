<template>
  <section class="section login">
    <div class="container login-container">
      <div class="login-white-content">
        <div class="login-title-page">
          <h1 class="login-title">Tennis App</h1>
          <p class="login-subtitle">Sign in to your account or
            <router-link to="/sign-up">create account</router-link>
          </p>
        </div>
        <div class="login-wrapper">
          <CustomInput
            placeholder="Enter your email address"
            input-type="email"
            class="login-custom-input top"
            input-label="E-mail address"
            @blur-input="getEmail"
          />
          <CustomInput
            placeholder="Enter your password"
            input-type="password"
            class="login-custom-input"
            input-label="Password"
            @blur-input="getPassword"
          />
          <ButtonComponent
            :is-disabled="buttonDisabled"
            button-title='LOG IN'
            @handle-click-button="loginUser"
            class="login-button"
            @click="getLoginUserResponse"
          />
          <router-link to="/password-reminder">
            Forgot password?
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import CustomInput from '@/components/CustomInput.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    CustomInput,
    ButtonComponent,
  },
  methods: {
    loginUser() {
      console.log('login clicked');
    },
    buttonDisabled() {
      return false;
    },
    getEmail(email: string) {
      this.email = email;
    },
    getPassword(password: string) {
      this.password = password;
    },
    getLoginUserResponse() {
      axios.post('http://localhost:5000/auth/login', {
        email: this.email,
        password: this.password,
      })
        .then((response) => console.log('response ', response))
        .catch((error) => console.log('error ', error));
    },
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
});
</script>

<style lang="scss">
  @import "../assets/style";

  .login {
    height: 100vh;
    background-color: $grey-1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-white-content {
      background-color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 70px 60px;
      border-radius: 10px;
    }

    .login-title-page {
      padding-right: 50px;
    }

    .login-title {
      font-size: 38px;
    }

    .top {
      margin-bottom: 20px;
    }

    .login-button {
      margin-top: 38px;
    }
  }
</style>
