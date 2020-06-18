<template>
    <div>
        Nazev:{{ sketches[activeItem].nazev }} <br>
        {{ 'rozmer:' }} <br>
        {{ 'cena:' }} <br>
        {{ 'autor:' }} <br>
    </div>
</template>

<script>
export default {
    props: ['sketches', 'activeItem']
}
</script>

<style>
.itemDescr{
  width: 40%;
  height: 80%;
  border: 2px dashed black;
  opacity: 90%;
  font-size: 150%;
  color:black;
  margin: 20px;
}
</style>