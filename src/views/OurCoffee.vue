<template>
  <div>
    <VHeader :title="this.title"
             :subtitle="this.subtitle"
             :style="backgroundImage"
    />
    <main>
      <div class="container">
        <!--    TODO: стилі у контейнері about-beans та about our-goods абсолютно ідентичні, треба задублювати їх-->
        <VAboutItem
            :about-image="aboutImage"
            :about-alt="aboutAlt"
            :about-text="this.aboutText"/>
        <VCardFilter :filter="filter"/>
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
import VCardFilter from "@/components/VCardFilter";

export default {
  name: "OurCoffee",
  components: {VCardFilter, VAboutItem, VCardContainer, VHeader, VFooter},
  data() {
    return {
      aboutText: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n" +
          "\n" +
          "Afraid at highly months do things on at. Situation recommend objection do intention\n" +
          "so questions. \n" +
          "As greatly removed calling pleased improve an. Last ask him cold feel\n" +
          "met spot shy want. Children me laughing we prospect answered followed. At it went\n" +
          "is song that held help face.",
      aboutAlt: "Our Coffee",
      aboutImage: require('@/assets/images/our-coffee.png'),
      title: "Our Coffee",
      subtitle: false,
      backgroundImage: {
        backgroundImage: `url(${require('@/assets/images/bg/header_second_bg.png')})`
      }
    }
  },
  methods: {
    filter(id) {
      const cardItems = document.querySelectorAll('.card__item');
      cardItems.forEach(e => {
        if (e.getAttribute('id').toLowerCase() !== id) {
          e.style.display = "none"
        } else {
          e.style.display = 'flex'
        }
      })

    }
  },
  computed: {
    filteredCoffee() {
      return {}
    }
  }
}
</script>

<style scoped>

</style>