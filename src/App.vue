<template>
  <div id="app">
    <X6Editor />
  </div>
</template>

<script>
import X6Editor from './components/x6/x6-editor'
export default {
  name: 'App',
  components: {
    X6Editor
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
