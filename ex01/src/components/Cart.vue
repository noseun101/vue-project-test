<template>
  <div>
    <h1>My Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        <h3>{{product.name}}</h3>
        <img :src="require(`@/assets/images/${product.image}.jpg`)" />
        <div>{{ product.cost }}</div>
        <button v-on:click="removeItemCart(product)">Remove From Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    remoteItemCart(product) {
      this.$emit("removeItemCart", product);
    }
  }
};
</script>

<style>

</style>