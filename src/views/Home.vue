<template>
  <div>
    <VHeader :title="this.title" :subtitle="this.subtitle"/>
    <main>
      <section class="section_1">
        <div class="container">
          <h2>About Us</h2>
          <picture>
            <img src="../assets/images/beans-logo-black.svg" alt="beans logo">
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
          <VCardContainer :best="showBest"/>
        </div>
      </section>
    </main>
    <VFooter/>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import VCardContainer from "@/components/VCardContainer";

export default {
  name: "Home",
  components: {VCardContainer, VFooter, VHeader},
  data() {
    return {
      title: "Everything You Love About Coffee",
      subtitle: true,
    }
  },
  methods:{
    showBest(){

    }
  }
}
</script>

<style scoped></style>
