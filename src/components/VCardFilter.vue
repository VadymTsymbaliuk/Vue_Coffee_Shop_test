<template>
  <div class="container__filter">
    <div class="container__filter-looking-for">
      <label for="looking-coffee">Looking for</label>
      <input type="text" id="looking-coffee" placeholder="start typing here...">
    </div>
    <div class="container__filter-filters">
      <span>Or filter</span>
      <ul >
        <li v-for="(list, index) in lists" :key="index" :id="list.id" @click="this.filter(list.id)">{{ list.country }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCardFilter",
  props: {
    filter: Function
  },
  data() {
    return {
      lists: [
        {
          country: 'Brazil',
          id: "brazil"
        },
        {
          country: 'Kenia',
          id: "kenia"
        },
        {
          country: 'Columbia',
          id: "columbia"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container__filter {
  display: flex;
  gap: 83px;
  margin-bottom: 60px;
}

.container__filter div {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.container__filter-looking-for input {
  margin-left: 19px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
}

.container__filter-looking-for input::-webkit-input-placeholder {
  font-family: 'Merienda-Regular', cursive;
}

.container__filter-looking-for input:-ms-input-placeholder {
  font-family: 'Merienda-Regular', cursive;
}

.container__filter-looking-for input:-moz-placeholder {
  font-family: 'Merienda-Regular', cursive;
}

.container__filter-looking-for input::-moz-placeholder {
  font-family: 'Merienda-Regular', cursive;
}

.container__filter-filters span {
  white-space: nowrap;
}

.container__filter-filters ul {
  display: flex;
  margin-left: 19px;
  list-style: none;
  gap: 5px;
}

.container__filter-filters ul li {
  padding: 5px 20px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.container__filter-filters ul li:first-child {
  border-radius: 4px 0 0 4px;
}

.container__filter-filters ul li:last-child {
  border-radius: 0 4px 4px 0;
}

</style>