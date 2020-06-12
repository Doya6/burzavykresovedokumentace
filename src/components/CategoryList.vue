<template>
    <div class="category-list">
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-left.png">
        <div class="category-list-items"> 
            <div class="category-list-item">Stoly</div>
            <div class="category-list-item">Židle</div>
            <div class="category-list-item">Skříně</div>
            <div class="category-list-item">Sety</div>
        </div>
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-right.png">
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.category-list{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgb(228, 228, 228);
}
.category-list-arrows{
    width: 30px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
}
.category-list-items{
    display: flex;
    justify-content: space-around;
    flex: 1 1 90%;
}
.category-list-item{
    cursor: pointer;
}
</style>