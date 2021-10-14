<template>
  <div>
    <header>
      {{cart.length}} in cart
      <button v-on:click="navigationTo('products')">Product List</button>
      <button v-on:click="navigationTo('cart')">Cart</button>
    </header>

    <!-- 생각할 점: 
     장바구니에 담은 상품을 장바구니에 담을 수 있어야 한다. -->
    <div v-if="page === 'cart'">
      <Cart v-on:removeItemcart="removeItemcart" :cart="cart" />
    </div>

    <div v-if="page === 'products'">
       <Products v-on:addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from './components/Products'
import Cart from './components/Cart'

export default {
  name: 'App',
  // data 속성을 반환하는 상품 배열 추가
  data: () => {
    return {
     // 페이지 추가
     page: "products",      
     // 상품 담을 배열 추가
     cart: []
    };
  },

  methods: {
    // Add Cart Method
    addItemToCart(product) {
      // console.log(product);
      this.cart.push(product);
      // console.log(this.cart);
    },
    
    // 상품 삭제
    removeItemCart(product) {
      this.cart.splice(this.cart.indexOf(product) , 1);
    },
    navigationTo(page) {
      this.page = page;
    }
  },

  components: { 
    Products,
    Cart 
  }
  
};
</script>

<style >
body {
  margin: 0;
}

/* fr: 유연한 크기를 갖는 단위로 
  그리드  컨테이너 내 공간비율을 분수로 나타냄. */
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.products .cost {
  float: center;  
}

.products button {
  padding: 10px;
  background-color: rgb(54, 53, 53, 3.7);
  color: white;
  border: 1px solid;
  outline: no;
  cursor: pointer;
}
</style>

<style scoped>
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

header button {
  padding: 10px;
  margin-right: 5px;
  background-color: #2d23b6;
  color: white;
  border: 1px;
  outline: no;
  cursor: pointer;
}
</style>