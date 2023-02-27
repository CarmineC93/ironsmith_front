<script>
import axios from "axios";
import {store} from "./store";
import AppHeader from './components/AppHeader.vue';

export default{
components: {
  AppHeader,
  data(){
    return{
    store,
    }
  }
}
 }

</script>

<template>

ciao

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
