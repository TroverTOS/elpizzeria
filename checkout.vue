
<script setup>
import { ref, vModelCheckbox, computed } from 'vue';
    console.log('hi')
const price = ref(0);
const checkedPizzas = ref([])

const totalPrice = computed(() => {
    let total = 0;

    checkedPizzas.value.forEach((price) => {
        total += parseFloat(price); 
    })

    return total;
})

</script>
<template>
    <div>
        <h1 class="title">Checkout - Italia Pizzeria</h1>
        <h2 class="desc">Select which pizzas you want</h2>
        <input type="checkbox" value="20.99" v-model="checkedPizzas"></input>
        <label class="checkout">Quatro Stagioni</label>
        <input type="checkbox" value="18.99" v-model="checkedPizzas"></input>
        <label class="checkout">Napoletana</label>
        <input type="checkbox" value="24.99" v-model="checkedPizzas"></input>
        <label class="checkout">Taraneasca</label>
        <p class="imtogood">Your final price is {{ totalPrice }}</p>
        <p class="imtogood">Cards we Accept are:</p>
        <img src="https://www.paymentscardsandmobile.com/wp-content/uploads/2019/11/visa-mastercard-logos.jpg" alt=""
        contain  
        height="100px"
        width="150px">
    </img>
        <br>
        <label class="detail">
            Card Number: <input class="him" maxlength="16" required><br>
        </label>
        <br>
        <label class="detail">
            Expiry Date: <input class="him" maxlength=2 size="3" required>/<input class="him" type="numeric" maxlength="2" size="3" required><br>
        </label>
        <br>
        <label class="detail">
            Name: <input class="him" maxlength="20" size="15" required><br>
        </label>
        <br>
        <label class="detail">
            CVV2: <input class="him" maxlength="3" size="4" required><br>
        </label>
        <br>
        <button class="Butonul-Meu" @click="buy">Confirm Purchase</button>
        <RouterLink to="/">hi</RouterLink>
    </div>
</template>

<script>
// <img src="data:image/png;base64,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"></img>
// <img src="data:image/png;base64,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"></img>
//     <img src="https://www.paymentscardsandmobile.com/wp-content/uploads/2019/11/visa-mastercard-logos.jpg">

</script>
