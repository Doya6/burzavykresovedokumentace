<template>
  <div>
    <div
      class="itemList"
      v-for="(item, index) in selectedItems"
      v-bind:key="item.id"
      v-on:click="$emit('setActiveItem', index, item.obrazek)"
    >
      <img
        class="item-list-main-pic"
        v-bind:src="require(`../assets/Pics/${item.nahled}.jpg`)"
        v-on:click="$emit('backgroundCleaner')"
      />

      {{ item.popis }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedItems"]
};
</script>

<style scoped>
.itemList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-list-main-name {
  align-self: flex-start;
}
.item-list-main-pic {
  width: 80%;
}

</style>