<template>
  <div id="main">
    <sectionTop
      class="section-top"
      v-on:selectCurrency="selectCurrency"
      v-bind:activeCurrency="activeCurrency"
    />

    <categoryList class="category-list" v-on:selectCategory="selectCategory" />

    <div class="container" v-bind:class="{'containerBackground': containerBackgroundShow}">
      <itemsList
        class="itemsList"
        v-if="itemsListShow"
        v-bind:selectedItems="selectedItems"
        v-on:setActiveItem="setActive"
        v-on:backgroundCleaner="backgroundCleaner"
      />

      <div class="itemDetail" v-if="itemsDetailShow">
        <itemPics v-bind:selectedItemPictures="selectedItemPictures" />

        <itemDescr
          class="itemDescr"
          v-bind:selectedItems="selectedItems"
          v-bind:activeItem="activeItem"
          v-bind:activeCurrency="activeCurrency"
          v-bind:rates="rates"
        />
      </div>
    </div>

    <sectionBottom class="sectionBottom" />
  </div>
</template>

<script>
import Sketches from "../assets/data/sketches.js";
import SectionTop from "../components/SectionTop.vue";
import CategoryList from "../components/CategoryList.vue";
import ItemsList from "../components/ItemsList.vue";
import ItemPics from "../components/ItemPics.vue";
import ItemDescr from "../components/ItemDescr.vue";
import SectionBottom from "../components/SectionBottom.vue";

export default {
  components: {
    sectionTop: SectionTop,
    categoryList: CategoryList,
    itemsList: ItemsList,
    itemPics: ItemPics,
    itemDescr: ItemDescr,
    sectionBottom: SectionBottom
  },
  created() {
    this.nactiCurrencyRate();
  },
  data() {
    return {
      sketches: Sketches,
      ListOfItemsShow: true,
      ItemShow: true,
      activeItem: "",
      itemsListShow: false,
      itemsDetailShow: false,
      selectedItems: "",
      selectedSubItems: "",
      selectedItemPictures: "",
      containerBackgroundShow: true,
      API_BASE: `http://data.fixer.io/api/latest?access_key=47fc7268b9f65797cca31e8d4deaf4d8`,
      rates: { czk: undefined, eur: undefined, usd: undefined },
      activeCurrency: "eur"
    };
  },
  methods: {
    setActive(index, obrazek) {
      this.activeItem = index;
      this.selectedItemPictures = obrazek;
      this.itemsDetailShow = true;
    },
    selectCategory: function(cat, subCat) {
      let selectedItems = undefined;
      this.itemsDetailShow = false;
      if (subCat === undefined) {
        this.selectedItems = this.sketches.filter(
          sketch => sketch.kategorie == cat
        );
        this.itemsListShow = true;
        this.itemsDetailShow = false;
      } else {
        this.selectedItems = this.sketches.filter(
          sketch => sketch.kategorie == cat && sketch.podKategorie == subCat
        );
        this.itemsListShow = true;
      }
      if (this.selectedItems == "") {
        window.alert("Tato kategorie je prázdná.");
        this.itemsDetailShow = false;
        this.itemsListShow = false;
        this.containerBackgroundShow = true;
      }
    },
    backgroundCleaner: function() {
      this.containerBackgroundShow = false;
    },
    selectCurrency(curr) {
      this.activeCurrency = curr;
    },
    nactiCurrencyRate() {
      fetch(this.API_BASE)
        .then(response => response.json())
        .then(data => {
          this.rates.usd = data.rates.USD;
          this.rates.eur = 1;
          this.rates.czk = data.rates.CZK;
        }
      );
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#main {
  font-family: sans-serif;
  font-size: 100%;
  overflow: hidden;
}
.container {
  display: flex;
  min-width: 500px;
  min-height: 500px;
  height: calc(100vh - 180px);
}
.containerPics {
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerBackground {
  background-image: url("../assets/ContainerBackgroundImg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.category-list {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgb(228, 228, 228);
}
.itemsList {
  overflow-y: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 20%;
  background-color: lightgray;
}
.itemDetail {
  display: flex;
  align-items: center;
  flex: 1 1 80%;
  padding: 30px;
  min-width: 590px;
}
.itemPics {
  flex: 1 1 60%;
}
.itemDescr {
  display: flex;
  flex-direction: column;
  margin: 5vw;
  width: 80%;
  min-width: 180px;
}
.sectionBottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
