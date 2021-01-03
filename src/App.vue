<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">TextForm</router-link> |
      <router-link to="/TextAnaliz">TextAnaliz</router-link>
    </div>
    <router-view/>
<!--    <TextForm/>-->
  </div>

</template>
<script>
import TextForm from './components/TextFormC.vue';
export default {
  name: 'App',
  components: {
    // TextForm,
  },
  data: () => ({
    text:'',
  }),
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
