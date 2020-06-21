<template>
  <div class="itemPics" v-on:keyup="previousPicKey">
    <img
    v-show="leftArrowShow"
    class="category-list-arrows"
    id="arrow_left"
    src="../assets/triangle-left.png"
    v-on:click="previousPic()"
    />

    <div class="category-list-items">
      <img
        class="item-list-main-pic"
        v-bind:src="require(`../assets/Pics/${selectedItemPictures[picIndex]}.jpg`)"
      />
    </div>

    <img
      v-show="rightArrowShow"
      class="category-list-arrows"
      id="arrow_right"
      src="../assets/triangle-right.png"
      v-on:click="nextPic()"
    />
  </div>
</template>

<script>
export default {
  props: ["selectedItemPictures"],
  created() {
    window.addEventListener("keyup", e => this.previousPicKey(e));
    this.picturesArrowsHandler();
  },
  data() {
    return {
      picIndex: 0,
      leftArrowShow: undefined,
      rightArrowShow: undefined
    };
  },
  methods: {
    previousPic() {
      if (this.picIndex !== 0) {
        this.picIndex--;
      }
      this.picturesArrowsHandler();
    },
    nextPic() {
      if (this.picIndex < this.selectedItemPictures.length - 1) {
        this.picIndex++;
      }
      this.picturesArrowsHandler();
    },
    previousPicKey(e) {
      if (e.keyCode === 37) {
        this.previousPic();
      } else if (e.keyCode === 39) {
        this.nextPic();
      }
    },
    picturesArrowsHandler(){
      if(this.selectedItemPictures.length <= 1){
        this.leftArrowShow = false;
        this.rightArrowShow = false;
      } else if(this.picIndex === 0 && this.selectedItemPictures.length > 1){
        this.leftArrowShow = false;
        this.rightArrowShow = true;
      } else if(this.picIndex + 1 === this.selectedItemPictures.length && this.selectedItemPictures.length > 1){
        this.leftArrowShow = true;
        this.rightArrowShow = false;
      } else {
        this.leftArrowShow = true;
        this.rightArrowShow = true;
      }
    },
  }
};
</script>

<style scoped>
.itemPics {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80%;
  background-color: rgb(236, 236, 236);
  overflow: hidden;
}
.item-list-main-pic {
  align-items: center;
  width: 90%;
}
.category-list-arrows {
  width: 30px;
  height: 30px;
  margin: 5px;
  flex: 0 0 5%;
  cursor: pointer;
}
</style>