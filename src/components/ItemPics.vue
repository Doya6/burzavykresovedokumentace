<template>
    <div class="itemPics">
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-left.png"
          v-on:click="previousPic()">
        <div class="category-list-items"> 
        
        <img class="item-list-main-pic"
        v-bind:src="require(`../assets/Pics/${selectedItemPictures[picIndex]}.jpg`)">

        </div>
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-right.png"
         v-on:click="nextPic()">
    </div>
</template>

<script>
export default {
  props: ['selectedItemPictures'],

  data(){
    return{
      picIndex: 0 
    }
  },

  methods:{
    previousPic(){
      if (this.picIndex !== 0) {this.picIndex --};
    },
    nextPic(){
      if (this.picIndex < this.selectedItemPictures.length - 1) {this.picIndex ++};
    }

  }
    
}
</script>

<style scoped>
.itemPics{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80%;
  background-color: rgb(236, 236, 236);
  overflow: hidden;
}
.item-list-main-pic{
  width: 100%;
  
}

</style>