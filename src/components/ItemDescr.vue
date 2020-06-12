<template>
    <div>
        {{ sketches[0].nazev }} <br>
        {{ sketches[0].rozmer }} <br>
        {{ sketches[0].cena }} <br>
        {{ sketches[0].autor }} <br>
    </div>
</template>

<script>
export default {
    props: ['sketches']
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