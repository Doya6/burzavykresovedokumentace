<template>
    <div class="category-list">
        <img class="category-list-arrows" id="arrow_left" src="../assets/triangle-left.png">

        <ul > 
            <li 
            v-for="(category, index) in categories"
            v-bind:key="index"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave">
            <a>{{ category.nazev }}</a>

            <ul class="subcategory-list-items"
                v-bind:class="{ isOpen }">
                <li 
                    v-for="(subcat, index) in category.subcategory"
                    v-bind:key="index">                   
                    <a>
                        {{ subcat.nazev }}
                    </a>
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
      isOpen: false
    }
  },
  methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
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
ul{
    list-style-type: none;
}
.category-list ul{
    display: flex;
    justify-content: space-around;
    flex: 1 1 90%;
}
.category-list > ul > li > a {
    display: block;
    padding: 20px;
    cursor: pointer;    
    text-decoration: none;
}

.subcategory-list-items{
    position: absolute;
    display: none;
    flex-direction: column;    
    padding: 0;
    background-color: lightgrey; 
    border: 1px solid black; 
}
.subcategory-list-items li {
    width: 250px;
}
.subcategory-list-items li a {
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
}
.isOpen {
    display: flex;
}


</style>