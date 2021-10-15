<template>
  <div class="home">
    <DescriptionDrawer
      :product="product" 
      :active="active.product_drawer" />
    <div class=">product-cards-container">
      <ProductSummaryCard 
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/item.js'
import ProductSummaryCard from '../components/products/ProductSummaryCard'
import DescriptionDrawer from '../components/products/DescriptionDrawer'
export default {
  name: 'Home',
  components: {
   ProductSummaryCard,
   DescriptionDrawer
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false 
        // fasle일 때 화면이 안보임
        // true 일 때 화면이 보임.
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true  // true 일 때 화면이 보임.
      console.log(this.product);
    }
  }
}
</script>
<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>