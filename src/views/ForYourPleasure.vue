<template>
  <div>
    <VHeader :title="this.title"
             :subtitle="this.subtitle"
             :style="backgroundImage"
    />
    <main>
      <div class="container">
        <VAboutItem
            :about-image="aboutImage"
            :about-alt="aboutAlt"
            :about-text="aboutText"/>
        <VCardContainer/>
      </div>
    </main>
    <VFooter/>

  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import VCardContainer from "@/components/VCardContainer";
import VAboutItem from "@/components/VAboutItem";

export default {
  name: "ForYourPleasure",
  components: {VAboutItem, VCardContainer, VFooter, VHeader},
  data() {
    return {
      aboutText: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n" +
          "\n" +
          "Afraid at highly months do things on at. Situation recommend objection do intention\n" +
          "so questions. \n" +
          "As greatly removed calling pleased improve an. Last ask him cold feel\n" +
          "met spot shy want. Children me laughing we prospect answered followed. At it went\n" +
          "is song that held help face.",
      aboutAlt: "About our goods",
      aboutImage: require('@/assets/images/for-your-pleasure.jpg'),
      title: "For your pleasure",
      subtitle: false,
      backgroundImage:{
        backgroundImage: `url(${require('@/assets/images/bg/header_third_bg.png')})`
      }
    }
  },
}
</script>

<style scoped>

</style>