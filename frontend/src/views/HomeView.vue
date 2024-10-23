<template>
    <NavBar/>
    <router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar
}
}
</script>

<style>
body {
    background-image: url("../assets/Background-image.png");
    background-size: cover;
}
</style>
