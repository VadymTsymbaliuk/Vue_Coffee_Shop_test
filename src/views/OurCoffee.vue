<template>
<div>
  <VHeader />
 <main>
  <div class="container">
<!--    TODO: стилі у контейнері about-beans та about our-goods абсолютно ідентичні, треба задублювати їх-->
    <VAboutItem
        :about-image="aboutImage"
        :about-alt="aboutAlt"
        :about-text="this.aboutText"/>
    <VCardFilter />
    <VCardContainer />
  </div>
 </main>
  <VFooter />
</div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import VCardContainer from "@/components/VCardContainer";
import VAboutItem from "@/components/VAboutItem";
export default {
  name: "OurCoffee",
  components: {VAboutItem, VCardContainer, VHeader, VFooter},
  data(){
    return{
      aboutText:"Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n" +
          "\n" +
          "Afraid at highly months do things on at. Situation recommend objection do intention\n" +
          "so questions. \n" +
          "As greatly removed calling pleased improve an. Last ask him cold feel\n" +
          "met spot shy want. Children me laughing we prospect answered followed. At it went\n" +
          "is song that held help face.",
      aboutAlt:"Our Coffee",
      aboutImage:require('@/assets/images/our-coffee.png')
    }
  },
  methods:{
    getCoffeeFromDB(){
      this.axios.get()
    }
  }
}
</script>

<style scoped>

</style>