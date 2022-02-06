<template>
  <div id="app">
    <router-link to='/'>bar</router-link>
    <router-link to='/foo'>foo</router-link>
    <router-link to='/hello_async'>hello_async</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
