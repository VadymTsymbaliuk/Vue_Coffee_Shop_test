<template>
  <div class="card__item">
    <picture class="card__item__img">
      <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-3x.png"
              media="(min-width: 1440px)">
      <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-2x.png"
              media="(min-width: 1080px)">
      <img src="../assets/images/first__page-sec-2/aromico-coffee-bens-1x.png" alt="aromico coffee">
    </picture>
    <span class="item__name">{{this.coffeeName}} {{this.coffeeWeight}} kg</span>
    <span class="item__price">{{this.coffeePrice}}</span>
  </div>
</template>

<script>
export default {
  name: "VCard",
  props:{
    coffeeName: String,
    coffeeWeight: Number,
    coffeePrice: Number
  }
}
</script>

<style scoped>

</style>