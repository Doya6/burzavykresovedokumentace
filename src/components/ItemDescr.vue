<template>
  <div>
    
    <div class="itemDescrText">
      {{ $t("ItemDescription.nazev") }} {{ selectedItems[activeItem].nazev }}
      <br />
      {{ $t("ItemDescription.rozmer") }} {{ selectedItems[activeItem].rozmer }}
      <br />
      {{ $t("ItemDescription.cena") }} {{ calculatedPrice }} <span class="toUpperCase" > {{activeCurrency}} </span>
      <br />
      {{ $t("ItemDescription.autor") }} {{ selectedItems[activeItem].autor }}
      <br />
    </div>

    <form class="formular" action id="formular" v-on:submit.prevent="submit">
      
      <h4>{{ $t("ItemDescription.poslatZpravu") }}</h4>

      <label for="email">e-mail</label>
      <input v-model="email" type="text" id="email" name="email" />

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
  height: 80%;
  font-size: 100%;
  color: black;
}

.formular {
  display: flex;
  flex-direction: column;
  flex: 1 1 90%;
  width: 100%;
}
h4{
  margin-bottom: 0;
}
label{
  margin: 10px;
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
  width: 80px;
  height: 30px;
  margin: 10px;
  align-self: flex-end;
  border-radius: 5px;
  color: white;
  background-color: rgb(108, 70, 245);
}
</style>