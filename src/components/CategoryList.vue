<template>
    <div class="category-list">
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-left.png">
        <ul > 
            <li 
                v-for="(category, index) in categories"
                v-bind:key="index"
                v-on:mouseover="mouseover(index)"
                v-on:mouseleave="mouseleave">
                {{ category.nazev }}

                <ul class="subcategory-list-items" 
                    v-if="isOpen === index">
                    <li 
                        v-for="(subcat, index2) in category.subcategory"
                        v-bind:key="index2" 
                        v-on:click="selectCategory(category.nazev, subcat.nazev, )">                  
                        {{ subcat.nazev }}
                    </li>
                </ul>

            </li>
        </ul>
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-right.png">
    </div>
</template>

<script>

import Categories from '../assets/data/categories.js';

export default {
    data(){
        return {
      categories: Categories,
      isOpen: ''
    }
  },
  methods: {
        mouseover: function (index) {
            this.isOpen = index;
        },
        mouseleave: function () {
            this.isOpen = "";
        },
        selectCategory(catNazev, subcatNazev){
            this.$emit('selectCategory', catNazev, subcatNazev);
            this.isOpen = "";
        }
    }
}
</script>

<style>
.category-list{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgb(228, 228, 228);
}
.category-list-arrows{
    width: 30px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
}
.category-list ul{
    display: flex;
    justify-content: space-around;
    flex: 1 1 90%;
    list-style-type: none;
}
.category-list li{
    cursor: pointer;
}
.subcategory-list-items{
    position: absolute;
    display: none;
    flex-direction: column;    
    padding: 0;
    background-color: lightgrey; 
    border: 1px solid black; 
    z-index: 1;
}
.subcategory-list-items li{
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
}

</style>