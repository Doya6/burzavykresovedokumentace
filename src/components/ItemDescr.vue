<template>
    <div>
        Nazev:{{ selectedItems[activeItem].nazev }} <br>
        Rozmer: {{ selectedItems[activeItem].rozmer }} <br>
        Cena: {{ selectedItems[activeItem].cena }} <br>
        Autor: {{ selectedItems[activeItem].autor }} <br>

        <form action="" id="formular" class="login-form">
		
            <div class="formular">
                <h3>Poslat objednavku</h3>

                <label for="email">e-mail</label>
                <input type="email" id="email" name="email">

                <label for="textarea">Zprava</label>
                <textarea  id="textarea" name="textarea"></textarea>

                <button type="submit" id="odeslat">Odeslat</button>
            </div>

	    </form>

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
.formular{
    display: flex;
    flex-direction: column;
    padding: 5vW;
}
</style>