<template>
    <div class="section-top">
        <img class="logo" src="../../public/pics/logo.jpg">

        <div class="title"> BURZA VÝKRESOVÉ DOKUMENTACE </div>

        <div class="lang-currency-selector">
            <div class="langSelector">
                <div class="langCZ" v-bind:class="this.$i18n.locale === 'cs' && 'red'" 
                 v-on:click="switchCZ"
                 id="cz">
                    <p>CZ</p>
                </div>
                <div class="langEN" v-bind:class="this.$i18n.locale === 'en' && 'red'"
                 v-on:click="switchEN"
                 id="en">
                    <p>EN</p>
                </div>
            </div>    
            
            <div class="currency-selector">    
                <div v-on:click="switchCurrency('czk')" v-bind:class="activeCurrency === 'czk' && 'red'">CZK</div>
                <div v-on:click="switchCurrency('eur')" v-bind:class="activeCurrency === 'eur' && 'red'">EUR</div>
                <div v-on:click="switchCurrency('usd')" v-bind:class="activeCurrency === 'usd' && 'red'">USD</div>

            </div>
        </div>

    </div>
</template>

<script>
export default {  
    
    props:['activeCurrency'],

    methods: {
		switchEN() {
            this.$i18n.locale = "en";
		},
		switchCZ() {
            this.$i18n.locale = "cs";
        },
        switchCurrency(curr) {  
            this.$emit('selectCurrency', curr);
        }
    }
}
</script>

<style>
:root {
    --background-Blue: rgb(108, 70, 245);
}
.section-top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-Blue);
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
    color: white;
    text-decoration: none;
    
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
    color: white;
}
.langCZ{
    padding-right: 5px;
    border-right: 1px solid white;
    align-items: flex-start;
    cursor: pointer;
}
.langEN{
    padding-left: 5px;
    align-items: flex-end;
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