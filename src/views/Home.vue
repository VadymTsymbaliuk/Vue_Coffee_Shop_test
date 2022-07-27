<template>
  <div>
    <header>
      <div class="container">
        <div>
          <nav class="navbar">
            <ul class="nav__wrapper">
              <li class="nav__item coffee__house">
                <a href="#" class="coffee__house">Coffee house</a>
              </li>
              <li class="nav__item">
                <a href="#">Our coffee</a>
              </li>
              <li class="nav__item">
                <a href="#">For your pleasure</a>
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
    <main>
      <section class="section_1">
        <div class="container">
          <h2>About Us</h2>
          <picture>
            <img src="../assets/images/beans-logo.svg" alt="beans logo">
          </picture>
          <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.</p>
          <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.</p>
        </div>
      </section>
      <section class="section_2">
        <div class="container">
          <h2>Our best</h2>
          <div class="section_2-card_wrapper">
            <div class="card__item">
              <picture class="card__item__img">
                <source srcset="../assets/images/first__page-sec-2/solimo-coffee-bens-3x.png"
                        media="(min-width: 1440px)">
                <source srcset="../assets/images/first__page-sec-2/solimo-coffee-bens-2x.png"
                        media="(min-width: 1080px)">
                <img src="../assets/images/first__page-sec-2/solimo-coffee-bens-1x.png" alt="solimo coffe">
              </picture>
              <span class="item__name">Solimo Coffee Beans 2 kg</span>
              <span class="item__price">10.73$</span>
            </div>
            <div class="card__item">
              <picture class="card__item__img">
                <source srcset="../assets/images/first__page-sec-2/presto-coffee-bens-3x.png"
                        media="(min-width: 1440px)">
                <source srcset="../assets/images/first__page-sec-2/presto-coffee-bens-2x.png"
                        media="(min-width: 1080px)">
                <img src="../assets/images/first__page-sec-2/presto-coffee-bens-1x.png" alt="presto coffee">
              </picture>
              <span class="item__name">Presto Coffee Beans 1 kg</span>
              <span class="item__price">15.99$</span>
            </div>
            <div class="card__item">
              <picture class="card__item__img">
                <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-3x.png"
                        media="(min-width: 1440px)">
                <source srcset="../assets/images/first__page-sec-2/aromico-coffee-bens-2x.png"
                        media="(min-width: 1080px)">
                <img src="../assets/images/first__page-sec-2/aromico-coffee-bens-1x.png" alt="aromico coffee">
              </picture>
              <span class="item__name">AROMISTICO Coffee 1 kg</span>
              <span class="item__price">6.99$</span>
            </div>
          </div>
        </div>
      </section>
    </main>
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
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
header {
  height: 640px;
  padding-top: 30px;
  background-image: url("../assets/images/bg/header_first_bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.container {
  max-width: 820px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}

.navbar .nav__wrapper {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav__wrapper .nav__item a {
  font-size: 12px;
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;

}

.header__section {
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.header__section span{
  font-family: Merienda-Bold, cursive;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #FFFFFF;
  padding-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
main section{
  text-align: center;
}
/*section_1*/
.section_1{
  padding-top: 80px;
  padding-bottom: 101px;
}
.section_1 h2{
  margin-bottom: 20px;
}

.section_2{
  background-image: url("../assets/images/bg/sec_2_first_page_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 80px;
  padding-bottom: 110px;
}
.section_2 h2{
  margin-bottom: 40px;
}
.section_2 .section_2-card_wrapper{
  display: flex;
  justify-content: space-between;
  gap: 71px;
}
/*cards*/

.card__item{
  padding: 21px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 8px;
}
.card__item .card__item__img{
  margin-bottom: 14px;
}
.card__item .card__item__img img{
  max-width: 150px;
}
.card__item .item__name{
  white-space: nowrap;
  padding-bottom: 11px;
}
.card__item .item__price{
  text-align: end;
}

/*footer*/
footer{
  padding-top: 52px;
}

footer .footer__navigation_wrapper ul{
  list-style: none;
  display: flex;
  gap: 40px;

}
footer .footer__navigation_wrapper ul a{
  text-decoration: none;
  color: #000;
}
</style>