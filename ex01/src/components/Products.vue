<template>
  <div>
    <h1>Products List</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{ product.name }}</h3>
        <div class="cost">{{ product.cost }}</div>
        <img :src="require(`@/assets/images/${product.image}.jpeg`)" />
        <button v-on:click="addItemToCart(product)">Add to Cart</button>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: "돈코츠 라멘",
          cost: "7500₩", 
          image: 'donkotsu_ramen'
        },
        {
          name: "미소 라멘",
          cost: "8000₩", 
          image: 'miso_ramen'
        },
        {
          name: "가츠동",
          cost: "8000₩", 
          image:'tonkatsu_rice'
        }
      ]
    };
  },
  methods: {
    addItemToCart(product) {
      // console.log("HERE", product);
      this.$emit('addItemToCart', product);
    }
  }
};
</script>

<style>
</style>