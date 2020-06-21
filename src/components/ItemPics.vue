<template>
  <div class="itemPics" v-on:keyup="previousPicKey">
    <img
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
      class="category-list-arrows"
      id="arrow_left"
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
  },
  data() {
    return {
      picIndex: 0
    };
  },

  methods: {
    previousPic() {
      if (this.picIndex !== 0) {
        this.picIndex--;
      }
    },
    nextPic() {
      if (this.picIndex < this.selectedItemPictures.length - 1) {
        this.picIndex++;
      }
    },
    previousPicKey(e) {
      if (e.keyCode === 39) {
        this.previousPic();
      } else if (e.keyCode === 37) {
        this.nextPic();
      }
    }
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
  width: 100%;
}
.category-list-arrows {
  width: 30px;
  height: 30px;
  margin: 5px;
  cursor: pointer;
}
</style>