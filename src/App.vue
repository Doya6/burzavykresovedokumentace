<template>
    <div>
      <div v-if="!linkHidden">
        <h1>Tohle bude uvodni stranka</h1>
        <router-link to="/Main" v-on:click="hideLink()">Main</router-link>
      </div>
      <router-view />
    </div>
</template>

<script>
export default {
  /*data(){
    return{
      linkHidden: false
    }
  },
  methods:{
    hideLink(){
      this.linkHidden = true;
    }
  }*/

}
</script>

<style>

</style>