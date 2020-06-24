<template>
  <div>
     
  <h4>{{ selectedItems[activeItem].nazev }}</h4>  
	<p class="popisPolozky">Lorem ipsum dolor sit amet, id sed novum luptatum iracundia.</p>		
	<table class="itemDescrText">
  	<tr>
  		<td>{{ $t("ItemDescription.rozmer") }}</td>
  		<td>{{ selectedItems[activeItem].rozmer }}</td>
    </tr>
		<tr>
    	<td>{{ $t("ItemDescription.cena") }}</td>
    	<td>{{ calculatedPrice }}<span class="toUpperCase">{{activeCurrency}}</span></td>
  	</tr>
		<tr>
    	<td> {{ $t("ItemDescription.autor") }}</td>
    	<td>{{ selectedItems[activeItem].autor }}</td>
  	</tr>
  </table>


    <form class="formular" action id="formular" v-on:submit.prevent="submit">
      
      <h4>{{ $t("ItemDescription.poslatZpravu") }}</h4>

      <label for="email">e-mail</label>
      <input v-model="email" type="email" id="email" name="email" />

      <label for="textarea">{{ $t("ItemDescription.zprava") }}</label>
      <textarea class="textarea" v-model="text" id="textarea" name="textarea"></textarea>

      <button type="submit" id="odeslat">{{ $t("ItemDescription.odeslat") }}</button>
      
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["selectedItems", "activeItem", "activeCurrency", "rates"],

  computed:{
    calculatedPrice(){
      return (this.selectedItems[this.activeItem].cena * this.rates[this.activeCurrency]).toFixed(2);
    }
  },

  data() {
    return {
      email: "",
      text: ""
      
    };
  },
  methods: {
    submit: function() {
      console.log(this.email, this.text);
      axios
        .post(
          "https://api.mailjet.com/v3.1/send",
          {
            Messages: [
              {
                From: {
                  Email: "wtxoajxmudqazxtrph@ttirv.net",
                  Name: "OOO"
                },
                To: [
                  {
                    Email: "dujka@centrum.cz" // UPRAVIT
                  }
                ],
                Subject: "Greetings from web.", ///SUBJEKT
                HTMLPart: this.text
              }
            ]
          },
          {
            auth: {
              username: "553615b893ac0b79e5e9c54c972cf768",
              password: "ec79df1beac6affc0da840f2c7d21de0"
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>

.itemDescrText {
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  margin: 0 0 15px 0;
}

.formular {
  display: flex;
  flex-direction: column;
  flex: 1 1 90%;
  width: 100%;
}
h4{
  margin: 0 0 5px 0;
}
.popisPolozky{
  margin: 0 5px 15px 0;
}
label{
  margin: 0px 0px 3px 10px;
}
input{
  width: 100%;
}
.textarea {
  height: 150px;
  width: 100%;
}
.toUpperCase{
  text-transform: uppercase;
}
button{
  width: 60px;
  height: 25px;
  margin: 5px;
  align-self: flex-end;
  border-radius: 5px;
  font-size: 12px;
background-color: rgb(108, 70, 245);
}
td:nth-child(2){
  text-align: right;
  font-weight: 300;
}
td:nth-child(1){
  font-weight: 100;
}
</style>