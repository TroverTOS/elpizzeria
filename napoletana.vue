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
    <h1 class="title">Pizza Napoletana</h1>
    <img width="400" height="400" src="https://mypizzacorner.com/wp-content/uploads/2020/03/la-pizza-napoletana.jpg"></img>
    
    <p class="pizza-text">The most known and most loved type of pizza, the Napoletana (Neopolitan) pizza is known as the origin of pizza and known as the best type of pizza.</p>
    <p class="desc">4000 kcal, £18.99</p>
    <button class="Butonul-Meu" @click="goToCheckout">Buy!</button>
</template>
