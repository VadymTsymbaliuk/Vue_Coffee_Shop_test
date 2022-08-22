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
        <h1>Everything You Love About Coffee</h1>
        <picture></picture>
        <span>We makes every day full of energy and taste</span>
        <span>Want to try our beans?</span>
        <button class="btn">More</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "VHeader"
}
</script>

<style scoped>

</style>