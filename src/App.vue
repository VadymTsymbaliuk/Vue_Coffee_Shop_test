<template>
  <router-view/>
</template>

<script>



export default {
  name: 'App',
  components: {},
  computed: {
    showCoffeePage(){
      const id = this.$route.params.id
      const product = this.avaliableProduct.find((p)=>p.uuid == id)
      return product
    }
  }
}
</script>

<style>

</style>
