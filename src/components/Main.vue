<template>
<!--Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>--->
  <div id="main">
    <sectionTop Class="section-top" />
    <containt>
      <categoryList Class="category-list" 
      v-on:selectCategory="selectCategory"/>

      <container>  
        <itemsList Class="itemsList" v-if="itemsListShow"
         v-bind:selectedItems="selectedItems" 
         v-on:setActiveItem="setActive"/>

        <itemDetail Class="itemDetail"
         v-if="itemsDetailShow">

          <itemPics Class="itemPics"
          /> 

          <itemDescr Class="itemDescr" 
          v-bind:selectedItems="selectedItems"
          v-bind:activeItem="activeItem"/>

        </itemDetail>
      </container>
    </containt>
    <sectionBottom Class="sectionBottom" />
  </div>
</template>

<script>
import Sketches from '../assets/data/sketches.js';
import SectionTop from '../components/SectionTop.vue'
import CategoryList from '../components/CategoryList.vue'
import ItemsList from '../components/ItemsList.vue'
import ItemPics from '../components/ItemPics.vue'
import ItemDescr from '../components/ItemDescr.vue'
import SectionBottom from '../components/SectionBottom.vue'

export default {
  components: {
    sectionTop:SectionTop,
    categoryList:CategoryList,
    itemsList:ItemsList,
    itemPics:ItemPics,
    itemDescr:ItemDescr,
    sectionBottom:SectionBottom,
  },
  data(){
    return {
      sketches: Sketches,
      ListOfItemsShow: true,
      ItemShow: true,
      activeItem: '',
      itemsListShow: false,
      itemsDetailShow: false,
      selectedItems: ''
    }
  },
  methods:{
    setActive(index){
      this.activeItem = index;
      this.itemsDetailShow = true;
    },
    selectCategory: function(cat, subCat){
      let selectedItems = this.sketches.filter(sketch => sketch.kategorie == cat && sketch.podKategorie == subCat)
      this.selectedItems = selectedItems;
        if(this.selectedItems == ''){
          window.alert("Tato kategorie je prázdná.");
        };
      this.itemsListShow = true;
    }
  }

}
</script>


<style>
body{
  margin: 0;
  padding: 0;
}
#main{
  min-width: 600px;
  font-family: sans-serif;
  font-size: 100%;
  
}
container{
  display:  flex;
  height: 480px;
  background-image: url("../assets/ContainerBackgroundImg.jpg");
    
}
.itemDetail{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 80%;
  height: 100%;
}

</style>
