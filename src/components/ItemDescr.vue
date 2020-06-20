<template>
  <div>
    <div class="itemDescrText">
      Nazev:{{ selectedItems[activeItem].nazev }}
      <br />
      Rozmer: {{ selectedItems[activeItem].rozmer }}
      <br />
      Cena: {{ selectedItems[activeItem].cena }}
      <br />
      Autor: {{ selectedItems[activeItem].autor }}
      <br />
      {{ $t("message.hello") }}
    </div>

    <form class="formular" action id="formular" v-on:submit.prevent="submit">
      <div>
        <h4>Poslat objednavku</h4>

        <label for="email">e-mail</label>
        <input v-model="email" type="text" id="email" name="email" />

        <label for="textarea">Zprava</label>
        <textarea class="textarea" v-model="text" id="textarea" name="textarea"></textarea>

        <button type="submit" id="odeslat">Odeslat</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["selectedItems", "activeItem"],

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
  width: 80%;
  height: 80%;
  font-size: 100%;
  color: black;
}
.formular {
  display: flex;
  flex-direction: column;
  flex: 1 1 90%;
  width: 80%;
}
.textarea {
  height: 80px;
  width: 80%;
}
</style>