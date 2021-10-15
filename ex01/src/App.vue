<template>
 <div>
  <div>
    <header>
      {{cart.length}} in cart
    </header>
  </div>
    <!-- 생각할 점: 
     장바구니에 담은 상품을 장바구니에 담을 수 있어야 한다. -->
    
    <div v-if="page === 'products'">
        <h1>Products List</h1>
        <div class="products">
          <div v-for="product in products" :key="product.name">
            {{product.name}}
             <img :src="require(`@/assets/images/${product.image}.jpeg`)" />
            <div>{{ product.cost }}</div>
            <button v-on:click="addItemToCart(product)">Add to Cart</button>
            <button v-on:click="removeItemCart(product)">Remove From Cart</button>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  // data 속성을 반환하는 상품 배열 추가
  data: () => {
    return {
     // 페이지 추가
     page: "products",      
     // 상품 담을 배열 추가
      cart: [],
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
    // Add Cart Method
    addItemToCart(product) {
      // console.log(product);
      this.cart.push(product);
      console.log(this.cart);
    },
    
    // 상품 삭제
    removeItemCart(product) {
      this.cart.splice(this.cart.indexOf(product));
    },
    navigationTo(page) {
      this.page = page;
    },
   
  },
  components: {} 
}
</script>

<style>
/* fr: 유연한 크기를 갖는 단위로 
  그리드  컨테이너 내 공간비율을 분수로 나타냄. */
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
header {
  height: 70px;
  /* background-image: url('https://image.shutterstock.com/image-vector/japanese-classic-floral-seamless-pattern-600w-628301057.jpg'); */
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4JtDDeTamy14ravxygGnZ4fZ57eFTlFp1l6VAMLglu8J4jjIt9PA01zjPe7dbeSRL4&usqp=CAU');
  color: #e7e7e7;
  box-shadow: 2px 2px 5px;
  text-align: center;
  border: 1px solid;
  font-size: 40px;
  padding-top: 20px;
}
</style>