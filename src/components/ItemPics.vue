<template>
    <div>
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-left.png">
        <div class="category-list-items"> 
        
        {{ selectedItemPictures }}

        </div>
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-right.png">
    </div>
</template>

<script>
export default {
  props: ['selectedItemPictures']
    
}
</script>

<style>
.itemPics{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60%;
  background-color: rgb(236, 236, 236);
}

</style>