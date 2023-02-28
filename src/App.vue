<script>
import axios from "axios";
import {store} from "./store";
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";

export default{
components: {
    AppHeader,
    AppMain,

    data() {
        return {
            store,
        };
    },
}
 }

</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <AppMain />

  </div>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

.wrapper{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
