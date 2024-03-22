<script>
    export default {
        methods: {
            goToCheckout() {
                this.$router.push('/checkout') 
            }
        }
    }
</script>

<template>
    <h1 class="title">Pizza Taraneasca</h1>
    <img width="300" height="300" src="https://antonica.ro/cdn/shop/products/Taraneasca_-_Homepage_B-3231.jpg?v=1587309472"></img>
    
    <p class="pizza-text">A traditional pizza within the Moldova region of Romania, consisting of different things that they usually found around their house.<br> It commonly served as a comfort food, and was known to be incredibly tasty by the locals.</p>
    <p class="desc">4000 kcal, £18.99</p>

    <button class="Butonul-Meu" @click="goToCheckout">Buy!</button>
</template>

