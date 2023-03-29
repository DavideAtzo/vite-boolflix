<script>
import { store } from './store';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppMain />
</template>


<style lang="scss"></style>
