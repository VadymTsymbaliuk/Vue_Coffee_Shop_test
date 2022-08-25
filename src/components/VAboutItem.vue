<template>
  <div class="container__wrapper">
    <picture>
      <img :src="aboutImage" :alt="aboutAlt" >
    </picture>
    <div class="container__wrapper__about-text">
      <h2>About our beans</h2>
      <img src="../assets/images/beans-logo-black.svg" alt="coffee beans">
      <p>
        {{this.aboutText}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VAboutItem",
  props:{
    aboutText:String,
    aboutImage: String,
    aboutAlt: String
  }
}
</script>

<style scoped>
.container__wrapper{
  display: flex;
  position: relative;
  gap: 79px;
  padding: 70px 30px 60px;
  margin-bottom: 60px;
  text-align: center;
}
.container__wrapper:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 1px;
  background-color: #000;
}
.container__wrapper img{
  filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
}
.container__wrapper__about-text{
  padding-top: 10px;
}
.container__wrapper__about-text h2{
  margin-bottom: 20px;
}
.container__wrapper__about-text img{
  margin-bottom: 25px;
}
.container__wrapper__about-text p{
  text-align: center;
}

</style>