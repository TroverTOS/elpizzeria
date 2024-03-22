
<script>
    export default {
        methods: {
            goToCheckout() {
                this.$router.push('./checkout') 
            }
        }
    }
    console.log('hellowwrold')
</script>
<template>
    <div>
        <h1 class="title">Quatro Stagioni</h1>
        <img width="300" height="300" src="https://www.lartistapizzeria.com/wp-content/uploads/2020/10/Quattro-Stagioni.jpg"></img>
        
        <p class="pizza-text">A pizza consisting of 4 different types of cheese, and with your choice of toppings!</p>
        <p class="desc">4000 kcal, £20.99</p>
        <button class="Butonul-Meu" @click="goToCheckout">Buy!</button>
        <RouterView />
    </div>
</template>


