<template>
  <div>
    <div
      class="itemList" 
      v-for="(item, index) in selectedItems"
      v-bind:key="item.id"
      v-on:click="$emit('setActiveItem', index, item.obrazek)"

    >
      <img
        class="item-list-main-pic" v-bind:class="selectedItemMarked === index && 'ramecek'"
        v-bind:src="require(`../assets/Pics/${item.nahled}.jpg`)"
        v-on:click="selectItem(index)"
      />

      <div class="item-list-main-name">{{ item.popis }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedItems"],
  data(){
    return{
      selectedItemMarked: undefined
    }
  },
  methods: {
        selectItem(index ){
            this.$emit('backgroundCleaner');
            this.selectedItemMarked = index;
        }
    }
};
</script>

<style scoped>

.item-list-main-name {
  align-self: flex-start;
  margin-left: 20px;
  font-size: 1.5vw;
}
.item-list-main-pic {
  width: 90%;
  cursor: pointer;
}
.ramecek{
  border: 3px solid gray;
}

</style>