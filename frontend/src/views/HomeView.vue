<template>
  <NavBar/>
  <div class="container">
    <UserComponent/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import UserComponent from '@/components/UserComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    UserComponent
}
}
</script>
