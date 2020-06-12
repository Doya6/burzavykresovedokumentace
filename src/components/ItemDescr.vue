<template>
    <div>
        {{ item[0].nazev }} <br>
        {{ item[0].rozmer }} <br>
        {{ item[0].cena }} <br>
        {{ item[0].autor }} <br>
    </div>
</template>

<script>
export default {
    props: ['item']
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