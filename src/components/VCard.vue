<template>
  <router-link :to="this.aboutCoffee" class="card__item" data-cuolity="{{this.best}}">
    <picture class="card__item__img">
      <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-3x.png"
              media="(min-width: 1440px)">
      <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-2x.png"
              media="(min-width: 1080px)">
      <img src="../assets/images/first__page-sec-2/aromico-coffee-bens-1x.png" alt="aromico coffee">
    </picture>
    <span class="item__name">{{ this.coffeeName }} {{ this.coffeeWeight }} kg</span>
    <span>{{ this.coffeeCountry }}</span>
    <span class="item__price">{{ this.coffeePrice }} $</span>
    <span>{{this.$route}}</span>
  </router-link>
</template>

<script>
export default {
  name: "VCard",
  props: {
    coffeeName: String,
    coffeeWeight: Number,
    coffeePrice: Number,
    coffeeCountry: String,
    best: Boolean,
    aboutCoffee: String,
    route:String
  }
}
</script>

<style scoped>
.card__item {
  max-width: 220px;
  width: 100%;
  padding: 21px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 8px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
}

.card__item .card__item__img {
  margin-bottom: 14px;
}

.card__item .card__item__img img {
  max-width: 150px;
}
.card__item span{
  text-align: end;
  text-decoration: none;
  color: #000;
  margin-bottom: 14px;
}

.card__item .item__name {
  white-space: nowrap;
}

</style>