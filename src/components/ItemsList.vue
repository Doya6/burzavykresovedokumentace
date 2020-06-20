<template>
    <div>
        
      <div class="itemsList"
        v-for="(item, index) in selectedItems"
        v-bind:key="item.id"
        v-on:click="$emit('setActiveItem', index, item.obrazek)">  
        
       <img class="item-list-main-pic"
        v-bind:src="require(`../assets/Pics/${item.nahled}.jpg`)">
        
        {{ item.popis }}

        

      </div>

    </div>
  </template>

<script>
export default {
    props: ['selectedItems'],
        
}
</script>

<style>
.itemsList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 20%;
  height: 100%;
  background-color: lightgray;
}
.item-list-main-name{
  align-self: flex-start;
}
.item-list-main-pic{
  width: 80%;
}
</style>