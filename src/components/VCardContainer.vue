<template>
  <section>
    <div class="container__cards">
      <VCard v-for="card in cards" :key="card.id"
             :coffee-name="card.name"
             :coffee-weight="card.weight"
             :coffee-price="card.price"
             :best="card.best"
             :about-coffee="card.aboutCoffee"
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
  async created() {
    try {
      const res = await axios.get('http://localhost:3001/coffeeSorts')
      this.cards = res.data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.container__cards{
  display: flex;
  /*justify-content: space-between;*/
  gap: 71px;
  flex-wrap: wrap;
}


</style>