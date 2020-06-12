<template>
    <div>
        <div class="item-list-main-name">name</div>
        <div class="item-list-main-pic">mainPic</div> 
        <div class="item-list-main-name">name</div>
        <div class="item-list-main-pic">mainPic</div>
        <div class="item-list-main-name">name</div>
        <div class="item-list-main-pic">mainPic</div>

    </div>
  </template>

<script>
export default {
    
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
  height: 30%;
  flex: 0 0 30%;
  border: 1px solid black;
}
</style>