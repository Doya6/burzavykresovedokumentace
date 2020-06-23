<template>
    <div class="footer">
        <a class="icon" href="./pics/sample.pdf" target="_blank"> <img src="/pics/pdf.ico" type="icon" alt=""> </a>
        <a href="./pics/sample.pdf" target="_blank">{{ $t("sectionBottom.sample") }}</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
:root {
    --background-Blue:  rgb(108, 70, 245);
}
.sectionBottom{
  width: 100%;
  height: 60px;
  background-color: var(--background-Blue);
  box-sizing: border-box;
  color: white;
}
a{
  color: white;
  text-decoration: none;
  margin-right: 5%;

}
img{
    width: 30px;
    margin: 10px;
}
.icon{
    margin: 0;
}
</style>