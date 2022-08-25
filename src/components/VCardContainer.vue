<template>
  <section>
    <div class="container__cards">
      <VCard v-for="card in cards" :key="card.id"
             :coffee-name="card.name"
             :coffee-weight="card.weight"
             :coffee-price="card.price"
             :coffee-country="card.country"
             :best="this.best"
             :about-coffee="card.aboutCoffee"
             :route="{name:'Product', params:{id:card.uuid}}"
      />
    </div>
  </section>
</template>

<script>
import VCard from "@/components/VCard";
import axios from "axios";

export default {
  name: "VCardContainer",
  components: {VCard},
  data() {
    return {
      cards: []
    }
  },
  props:{
    best: Boolean
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3001/coffeeSorts')
      this.cards = res.data
    } catch (e) {
      console.log(e)
    }
  },
  computed:{
    showProduct(){
      const id = this.$route.params.id,
          product = this.cards.find((p)=> p.uuid === id);
      return product
    }
  }
}
</script>

<style scoped>
.container__cards{
  display: flex;
  gap: 65px;
  flex-wrap: wrap;
}
.container__cards a{
  text-decoration: none;
}


</style>