<template>
  <div>
    <VHeader/>
    <main>
      <section class="section_1">
        <div class="container">
          <h2>About Us</h2>
          <picture>
            <img src="../assets/images/beans-logo.svg" alt="beans logo">
          </picture>
          <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.</p>
          <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.</p>
        </div>
      </section>
      <section class="section_2">
        <div class="container">
          <h2>Our best</h2>
          <div class="section_2-card_wrapper">
            <VCard v-for="(item, id) in coffeeItems" :key="id"
                :coffee-name="item.name"
                :coffee-weight="item.weight"
                :coffee-price="item.price"
            />
          </div>
        </div>
      </section>
    </main>
    <VFooter />
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VCard from "@/components/VCard";
import VFooter from "@/components/VFooter";

export default {
  name: "Home",
  components: {VFooter, VCard, VHeader},
  data: () => {
    return {
      coffeeItems: [
        {
          name: 'Solimo Coffee Beans 2 kg',
          weight: 2,
          price: 10.71
        },
        {
          name: 'Presto Coffee Beans 1 kg',
          weight: 1,
          price: 15.99
        },
        {
          name: 'AROMISTICO Coffee 1 kg',
          weight: 1,
          price: 6.99
        }
      ]
    }
  }
}
</script>

<style scoped></style>
