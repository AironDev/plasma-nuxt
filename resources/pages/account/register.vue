<template>
  <section class="container">
    <div class="register-box">
      <Form ref="formSignup" :model="user" :rules="ruleSignup" :label-width="100">
        <FormItem label="Username" prop="username">
          <Input type="text" v-model="user.username" placeholder="Username"></Input>
        </FormItem>
        <FormItem label="E-Mail" prop="email">
          <Input type="email" v-model="user.email" placeholder="E-Mail"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="user.password" placeholder="Password"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="password_confirmation">
          <Input type="password" v-model="user.password_confirmation" placeholder="Confirm password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" :loading="loading" @click="handleSubmit('formSignup', user)">
            <span v-if="!loading">Sign up</span>
            <span v-else>Loading...</span>
          </Button>
          <Button type="ghost" @click="handleReset('formSignup')" style="margin-left: 10px">Cancel</Button>
        </FormItem>
      </Form>
      <div class="ivu-form-item-error-tip server-side" v-if="signUpErrors">
        <div v-for="formError in signUpErrors">
          {{ formError.message }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

    data() {
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'))
        } else if (value !== this.user.password) {
          callback(new Error('The two input passwords do not match!'))
        } else {
          callback()
        }
      };

      const validateUsername = async (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please fill in the Username'))
        } else if (value) {
          let exist = await this.checkUsername(value)
          if (exist) {
            callback(new Error('Username has already been taken by someone else'))
          } else {
            callback()
          }
        }
      };

      const validateEmail = async (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Mailbox cannot be empty'))
        } else if (value) {
          let exist = await this.checkEmail(value)
          if (exist) {
            callback(new Error('E-Mail already exist'))
          } else {
            callback()
          }
        }
      };

      return {
        user: {
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        ruleSignup: {
          username: [
            {required: true, validator: validateUsername, trigger: 'blur'}
          ],
          email: [
            {required: true, validator: validateEmail, trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {
              type: 'string',
              pattern: '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=(.*[\\W]){1,})(?!.*\\s)',
              message: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
              trigger: 'blur'
            }
          ],
          password_confirmation: [
            {validator: validatePassCheck, trigger: 'blur'}
          ],
        },
        signUpErrors: null,
        loading: false
      };
    },

    methods: {

      async checkUsername(username) {
        return await this.$axios.$post('checkUsername', {username: username})
      },

      async checkEmail(email) {
        return await this.$axios.$post('checkEmail', {email: email})
      },

      handleSubmit(name, formData) {
        this.loading = true
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.register(formData)
          } else {
            this.$Message.error('Fail!')
          }
        })
      },

      handleReset(name) {
        this.$refs[name].resetFields()
      },

      async register(user) {
        const register = await this.$store.dispatch('register', user)
        if (register === true) {
          this.$Message.success('Success!')
          this.$Modal.info({
            title: 'Confirm E-Mail',
            content: 'Please confirm your e-mail address to activate your account!',
            okText: 'OK',
            onOk: () => {
              this.$router.replace({path: '/'})
            }
          })
        } else if (register.jwt) {
          this.$Message.success('Success!')
          this.$router.replace({path: '/'})
        } else {
          this.signUpErrors = register
          this.$Message.error('Register Error!')
        }
      }
    },

  }
</script>
