<template>
  <div>
    <VHeader
        :title="this.title"
        :subtitle="this.subtitle"
        :style="backgroundImage"
    />
    <main>
      <div class="container__wrapper">
        <picture>
          <img :src="require('@/assets/images/about-coffee.jpg')" alt="about coffee">
        </picture>
        <div class="container__wrapper__about-text">
          <h2>About our beans</h2>
          <img src="../assets/images/beans-logo-black.svg" alt="coffee beans">

          <p><span>Country: </span>{{ this.country }}</p>
          <p><span>Description: </span>{{ this.description }}</p>
          <p class="container__wrapper__about-text__price"><span>Price: </span>{{ this.price }}$</p>

        </div>
      </div>
    </main>
    <VFooter/>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import axios from "axios";


export default {
  name: "AboutCoffee",
  components: {VFooter, VHeader},
  data() {
    return {
      description: "",
      country: "",
      images: "",
      price: "",
      title:"Our Coffee",
      subtitle: false,
      backgroundImage:{
        backgroundImage: `url(${require('@/assets/images/bg/header_second_bg.png')})`
      }
    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3001/coffeeSorts')
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].id === +this.$route.params.id) {
          this.description = res.data[i].description
          this.country = res.data[i].country
          this.price = res.data[i].price
          this.images = res.data[i].images
          console.log(this.images)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.container__wrapper {
  display: flex;
  position: relative;
  gap: 79px;
  padding: 70px 30px 60px;
  margin-bottom: 60px;
  text-align: center;
}

.container__wrapper:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 1px;
  background-color: #000;
}

.container__wrapper img {
  filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
}

.container__wrapper__about-text {
  padding-top: 10px;
}

.container__wrapper__about-text h2 {
  margin-bottom: 20px;
}

.container__wrapper__about-text img {
  margin-bottom: 25px;
}

.container__wrapper__about-text p {
  text-align: start;
  margin-bottom: 16px;
}
.container__wrapper__about-text span{
  font-size: 14px;
}
.container__wrapper__about-text .container__wrapper__about-text__price{
  font-size: 20px;
}


</style>