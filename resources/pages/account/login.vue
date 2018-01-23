<template>
  <section class="container">
    <div class="login-box">
      <Form ref="formLogin" :model="user" :rules="ruleLogin">
        <FormItem prop="username">
          <Input type="text" v-model="user.username" placeholder="Username">
          <Icon type="person" size="14" slot="prepend" color="#999999"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="user.password" placeholder="Password">
          <Icon type="locked" size="14" slot="prepend" color="#999999"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formLogin', user)">Login</Button>
        </FormItem>
      </Form>

      <div class="ivu-form-item-error-tip server-side" v-if="errorMessage">
        {{ errorMessage }}
      </div>

      <nuxt-link :to="{ name: 'account-register' }">
        <Icon type="planet" size="20"></Icon>
        <span class="layout-text">Create a new account!</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {

    name: 'page-login',

    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        ruleLogin: {
          username: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'}
          ]
        },
        errorMessage: null
      }
    },

    methods: {
      handleSubmit(name, formData) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login(formData)
          } else {
            this.$Message.error('Fail!')
          }
        })
      },

      async login(user) {
        let auth = await this.$store.dispatch('login', user)
        if (auth.jwt) {
          this.$Message.success('Login successful!')
          this.$router.replace({path: '/posts'})
        } else {
          this.$Message.error('Fail!')
          this.errorMessage = auth
        }
      }
    },

  }
</script>
