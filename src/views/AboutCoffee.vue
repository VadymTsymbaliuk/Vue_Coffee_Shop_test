<template>
  <div>
    <VHeader/>
    <main>
      <div class="container">
        <picture>
          <img :src="this.img" alt="about coffee">
        </picture>
        <div class="container__about-coffee">
          <p><span>Country</span>{{this.country}}</p>
          <p><span>Description</span>Description:{{this.description}}</p>
          <p><span>Price</span> 16.99$</p>
        </div>
      </div>
    </main>
    <VFooter/>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";

export default {
  name: "AboutCoffee",
  components: {VFooter, VHeader},
  props:{
    description: String,
    country: String,
    img: String
  },
  // created() {
  //   this.$watch(()=>{
  //     this.$route.params,
  //         (toParams, previousParams)=>{
  //
  //         }
  //   })
  // }
}
</script>

<style scoped>

</style>