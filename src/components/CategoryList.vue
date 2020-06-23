<template>
    <div >
        <ul class="category-list"> 
            <li class="category-list-li"
                v-bind:class="selectedCategoryMarked === index && 'ramecek'"
                v-for="(category, index) in categories"
                v-bind:key="index"
                v-on:mouseover="mouseover(index)"
                v-on:mouseleave="mouseleave">
                <span v-on:click="selectCategory(category.nazev, index)">
                {{ category.nazev }} </span>
                <ul class="subcategory-list-items" 
                    v-if="isOpen === index">
                    <li class="subcategory-li"
                        v-for="(subcat, index2) in category.subcategory"
                        v-bind:key="index2" 
                        v-on:click="selectSubCategory(category.nazev, subcat.nazev, index)">                  
                        {{ subcat.nazev }}
                    </li>
                </ul>

            </li>
        </ul>
    </div>
</template>

<script>

import Categories from '../assets/data/categories.js';

export default {
    data(){
        return {
        categories: Categories,
        isOpen: '',
        selectedCategoryMarked: ''
        }
    },
  methods: {
        mouseover: function (index) {
            this.isOpen = index;
        },
        mouseleave: function () {
            this.isOpen = "";
        },
        selectCategory(catNazev, index ){
            this.$emit('selectCategory', catNazev, index);
            this.isOpen = false;
            this.selectedCategoryMarked = index;
        },
        selectSubCategory(catNazev, subcatNazev, index ){
            this.$emit('selectSubCategory', catNazev, subcatNazev, index);
            this.isOpen = false;
            this.selectedCategoryMarked = index;
        }
    }
}
</script>

<style>
.category-list{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(228, 228, 228);
  margin: 0;
}
.category-list ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 90%;
    list-style-type: none;
}
.category-list-li{
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 60px;
    padding: 0 10px 0 10px;
}
.subcategory-list-items{
    position: absolute;
    top: 100px;
    transform: translateX(-10px);
    display: none;
    flex-direction: column;    
    padding: 0;
    background-color: lightgrey; 
    z-index: 1;
}
.subcategory-li{
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
}
.ramecek{
  background-color:  lightgrey; 
}

</style>