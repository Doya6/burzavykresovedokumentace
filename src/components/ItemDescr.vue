<template>
    <div>
        Nazev:{{ selectedItems[activeItem].nazev }} <br>
        Rozmer: {{ selectedItems[activeItem].rozmer }} <br>
        Cena: {{ selectedItems[activeItem].cena }} <br>
        Autor: {{ selectedItems[activeItem].autor }} <br>
    </div>
</template>

<script>
export default {
    props: ['selectedItems', 'activeItem']
}
</script>

<style>
.itemDescr{
  width: 40%;
  height: 80%;
  border: 2px dashed black;
  font-size: 150%;
  background-color: gray;
  color:white;
  margin: 20px;
  
}
</style>