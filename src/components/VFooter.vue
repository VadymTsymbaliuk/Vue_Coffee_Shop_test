<template>
  <footer>
    <div class="container">
      <div class="footer__navigation_wrapper">
        <ul>
          <li class="coffee__house">
            <router-link to="/">Coffee house</router-link>
          </li>
          <li>
            <router-link to="/our-coffee">Our coffee</router-link>
          </li>
          <li>
            <router-link to="/for-your-pleasure">For your pleasure</router-link>
          </li>
        </ul>
      </div>
      <div class="container__img-wrapper">
        <img src="../assets/images/beans-logo.svg" alt="coffee beans">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VFooter"
}
</script>

<style scoped>

</style>