<template>
  <header>
    <div class="container">
      <div>
        <nav class="navbar">
          <ul class="nav__wrapper">
            <li class="nav__item coffee__house">
              <router-link to="/" class="coffee__house">Coffee house</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/our-coffee">Our coffee</router-link>
            </li>
            <li class="nav__item">
              <router-link  to="/for-your-pleasure">For your pleasure</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__section">
        <h1>{{this.title}}</h1>
        <div v-if="this.subtitle">
          <picture>
            <img src="../assets/images/beans-logo-white.svg" alt="logo">
          </picture>
          <span>We makes every day full of energy and taste</span>
          <span>Want to try our beans?</span>
          <button class="btn">More</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "VHeader",
  props:{
    title: String,
    subtitle: Boolean
  }
}
</script>

<style scoped>

</style>