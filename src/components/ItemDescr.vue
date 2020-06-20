<template>
    <div>
        <div class="itemDescrText">
            Nazev:{{ selectedItems[activeItem].nazev }} <br>
            Rozmer: {{ selectedItems[activeItem].rozmer }} <br>
            Cena: {{ selectedItems[activeItem].cena }} <br>
            Autor: {{ selectedItems[activeItem].autor }} <br>
        </div>

        <form class="formular" action="" id="formular"
            v-on:submit.prevent="submit">
		
            <div >
                <h4>Poslat objednavku</h4>

                <label for="email">e-mail</label>
                <input v-model="email" type="text" id="email" name="email">

                <label for="textarea">Zprava</label>
                <textarea class="textarea" v-model="text" id="textarea" name="textarea"></textarea>

                <button  type="submit" id="odeslat">Odeslat</button>
            </div>

	    </form>

    </div>
</template>

<script>
export default {
    props: ['selectedItems', 'activeItem'],

    data(){
        return{
            email: '',
            text: ''
        }
    },
    methods:{
        submit: function(){
            console.log(this.email, this.text )
        }
    }
}
</script>

<style>

.itemDescrText{
  width: 80%;
  height: 80%;
  font-size: 100%;
  color:black;
  margin: 20px;
}
.formular{
  display: flex;
  flex-direction: column;
  flex: 1 1 90%;
  width: 80%;
}
.textarea{
  height: 80px;
  width: 80%;
}
</style>