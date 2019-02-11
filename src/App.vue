<template lang="pug">
  #app
    h1 Tree View
    tree-view(:tree="tree")
</template>

<script>
import Tree from './tree.json'

export default {
  name: 'App',
  data () {
    return {
      tree: Tree
    }
  }
}
</script>

<style lang="sass">
body
  background-color: #4a5259
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100vw
  overflow: hidden

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: white
  min-width: 300px
</style>
