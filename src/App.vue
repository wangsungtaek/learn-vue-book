<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data</router-link> |
    <router-link to="/title">Title</router-link>
  </div>
  <router-view/>
  <ParentComponent />
  <ParentComponent2 />
  <ParentComponent3 />
  <ParentComponent5 />
  <ProvideInject />
  <CompositionAPI2 />
  <CompositionAPI4 />
  <StoreAccess />
</template>

<script>
import CompositionAPI2 from './views/CompositionAPI2.vue'
import CompositionAPI4 from './views/CompositionAPI4.vue'
import ParentComponent from './views/ParentComponent.vue'
import ParentComponent2 from './views/ParentComponent2.vue'
import ParentComponent3 from './views/ParentComponent3.vue'
import ParentComponent5 from './views/ParentComponent5.vue'
import ProvideInject from './views/ProvideInject.vue'
import StoreAccess from './views/StoreAccess.vue'


export default {
  components: {
    ParentComponent,
    ParentComponent2,
    ParentComponent3,
    ParentComponent5,
    ProvideInject,
    CompositionAPI2,
    CompositionAPI4,
    StoreAccess
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
