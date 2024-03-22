<script setup>
console.log('no error')

</script>

<template>
 
    
    <head>
        
    </head>
    <title class="text 3xl font-bold underline">Pizza for Cheap!</title>
    <div class="display-relative">
        <h1 class="title">Italia Pizzeria</h1>
        <p class="offer">Limited time offer!<br> Anyone who buys 3 pizzas over 1 week,<br> gets 3 pizzas the next!</p>
        <nav>
        <RouterLink class="hi" to="./taraneasca">Pizza Taraneasca</RouterLink><br>
        <p class="desc">The Romanian Classic...</p><br>
        <RouterLink class="hi" to="/quatro">Quatro Stagioni</RouterLink><br><br>
        <p class="desc">The Four Seasons shown through Pizza...</p><br>
        <RouterLink class="hi" to="./napoletana">Pizza Napoletana</RouterLink><br><br>
        <p class="desc">The Home of Pizza...</p><br>
        </nav>
        <h2 class="title">Our Baking process:</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZOLfzakEgtQ?si=ueHcYzw8jSNNNyKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br>
        <p class="desc">We dedicate ourselves day on day to making sure you have the freshest and most enjoyable experience.</p>
        <ul class="gory">
           <li>Our wood-fired ovens are cleaned daily.</li>
           <li>Our Ingredients are always freshly bought from a British Farmer.</li>
           <li>Our dough is freshly made daily.</li>
            <li> And our staff is disciplined, friendly, and willing to take any suggestion on hand!</li>
        </ul>
        
    </div>

</template>
