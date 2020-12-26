<template>
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <v-form>
  <v-card flat>
      <v-main>
        <div>
          <bold>Введите текст для анализа: </bold>
        </div>
        <v-textarea
        >
        </v-textarea>
      </v-main>
  </v-card>
  <v-card-actions>
    <v-btn
        text
        @click="resetForm"
    >
      Cancel
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
        type="Отправить на обработку"
        @click="sendForm"
    >
      Register
    </v-btn>
  </v-card-actions>
  </v-form>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
