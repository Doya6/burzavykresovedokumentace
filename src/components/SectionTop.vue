<template>
    <div class="section-top">
        <img class="logo" src="../../public/pics/logo.jpg">
        <!--<div class="title"> <router-link to="../components/Home"> BURZA VÝKRESOVÉ DOKUMENTACE </router-link></div>
                
        <div class="top-section-buttos">
            
            <button class="top-section-button">DESIGN
                <p class="cost-symbol"> $ $ $ </p>
            </button>
            <button class="top-section-button">STANDARD
                <p class="cost-symbol"> $ $ </p>
            </button>
            <button class="top-section-button">DIY
                <p class="cost-symbol"> $ </p>
            </button>
            <button class="top-section-button">All</button>
        </div>-->
        <div class="title"> BURZA VÝKRESOVÉ DOKUMENTACE </div>
        <div class="lang-currency-selector">
            <div class="langSelector">
                <div class="langCZ" v-on:click="switchCZ" v-bind:class='czColor' id="cz">
                    <p>CZ</p>
                </div>
                <div class="langEN" v-on:click="switchEN" v-bind:class='enColor' id="en">
                    <p>EN</p>
                </div>
            </div>    
            
            <div class="currency-selector">    
                <div v-on:click="switchCurrency('czk')" v-bind:class='colorCZK'>CZK</div>
                <div v-on:click="switchCurrency('eur')" v-bind:class='colorEUR'>EUR</div>
                <div v-on:click="switchCurrency('usd')" v-bind:class='colorUSD'>USD</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {    
    data() {
        return {
            currLang:'cz',
            czColor: 'red',
            enColor: 'white',
            message: {
            en: 'enenenen',
            cz: 'czczczcz',
            },
            currency: 'czk',
            colorCZK: 'red',
            colorEUR: 'white',
            colorUSD: 'white'
        }
    },
    methods: {
		switchEN() {
				this.currLang = 'en';
				this.enColor = 'red';
                this.czColor = 'white';
		},
		switchCZ() {
				this.currLang = 'cz';
				this.czColor = 'red';
				this.enColor = 'white';
        },
        switchCurrency(curr) {
                if (curr === 'czk'){
                    this.currency = 'czk'
                    this.colorCZK = 'red'
                    this.colorEUR = 'white'
                    this.colorUSD = 'white'
                } else if (curr === 'eur'){
                    this.currency = 'eur'
                    this.colorCZK = 'white'
                    this.colorEUR = 'red'
                    this.colorUSD = 'white'
                } else if (curr === 'usd'){
                    this.currency = 'usd'
                    this.colorCZK = 'white'
                    this.colorEUR = 'white'
                    this.colorUSD = 'red'
                }
         },
    }
}
</script>

<style>
:root {
    --background-Losos: rgb(245, 153, 153);
}
.section-top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-Losos);
} 
.logo{
    margin: 10px;
    flex: 0 1 5%;
    height: 50px;
}
.title{
    margin: 10px;
    flex: 0 1 60%;
    font-size: 2vw;
    color: gray;
    text-decoration: none;
    text-shadow:white 1px 1px;
}
.top-section-buttos{
    display: flex;
    justify-content: space-around;
    flex: 0 1 30%;
    height: 35px;
    background-color: white;
    border-radius: 10px;
    box-shadow: gray 3px 3px;
}
.top-section-button{  
    position: relative;
    margin: 5px 2px;
    color: white;
    background-color: silver;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.top-section-buttons, button:last-child{
    margin-left: 3em;
    background-color:var(--background-Losos);
}
.cost-symbol{
    position: absolute;
    top: -15px;
    right: 5px;
    font-size: 80%;
    color: rgb(117, 117, 117);
}
.lang-currency-selector{
    display: flex;
    flex: 0 0 20%;
    justify-content: end;
}
.langSelector{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0 1 80%;
    height: 60px;
    margin-right: 2vw;
}
.langCZ{
    padding-right: 5px;
    border-right: 1px solid white;
    align-items: flex-start;
    color: #E60200;
    cursor: pointer;
}
.langEN{
    padding-left: 5px;
    align-items: flex-end;
    color: white;
    cursor: pointer;
}
.currency-selector{
    display: flex;
    flex: 1 1 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 80%;
    color: white;
}
.red{
    cursor: pointer;
    color: red;
    }
.white{
    cursor: pointer;
    color: white;
}

</style>