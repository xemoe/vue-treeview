<template lang="pug">
  #app
    h1 Tree View
    tree-view(:tree="tree")
    h5 Created by: 
      a(href="https://ll931217.github.io", target="_blank").author Liang-Shih Lin
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
  width: 300px

  a.author
    &:link, &:active, &:visited
      color: orange
      text-decoration: none
    &:hover
      text-decoration: underline
</style>
