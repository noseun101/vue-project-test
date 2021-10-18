<template>
  <div>
    <header>
      로고, 회원가입, 로그아웃
    </header>

    <div class="order-way">
      <div class="btn-group">
        <button class="btn-store">매장 선택</button>
        <button class="btn-paving">포장 선택</button>
      </div>
    </div>

    <div>
      <select v-model="menu_choice">
        <option value="01">라면</option>
        <option value="02">덮밥</option>
      </select>
      <h1>Products List</h1>
      <div class="products">
        <div v-for="product in products" :key="product.name">
          {{product.name}}
          <!--img :src="require(`@/assets/images/${product.image}.jpeg`)" /-->
          <div>{{ product.cost }}</div>
          <button v-on:click="addItemToCart(product)">+</button>
          <button v-on:click="removeItemCart(product)">-</button>
          <!--button v-on:click="setCounter(7)">set7</button-->
          <!--p>조횟수: {{ counter }}</p-->
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
      menu_choice: "01",
      // count: 0,
      cart: [],
      products: [
        {
          id: 1001,
          name: "돈코츠 라멘",
          cost: "7500₩", 
          image: 'donkotusu_ramen'
        },
        {
          id: 1002,
          name: "가츠동",
          cost: "8000₩", 
          image: 'tonkatsu_rice'
        },

        {
          id: 1003,
          name: "미소",
          cost: "8500₩", 
          image: 'miso_ramen'
        },

         {
          id: 1004,
          name: "규동",
          cost: "8500₩", 
          image: 'qydon_rice'
        },
      ]
    }
  },
  methods: {
    // increaseCounter() {
    //  this.counter = this.counter + 1;
    //},

    //setCounter(counter) {
    //   this.counter = counter;
    //},

    // Add Cart Method
    addItemToCart(product) {
      // console.log(product);
      this.cart.push(product);
      console.log(this.cart);
      //console.log(this.cart.lenth);
    },
    
    // 상품 삭제
    removeItemCart(product) {
      this.cart.splice(this.cart.indexOf(product));
    },

    
   
  },
  components: {} 
}
</script>

<style>
/* fr: 유연한 크기를 갖는 단위로 
  그리드  컨테이너 내 공간비율을 분수로 나타냄. */
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

.order-way {
  padding: 30px;
  text-align: center;
  /* background-color: #333; */
}

.order-way .btn-store,
.order-way .btn-paving {
  width: 180pt;
  height: 50pt;
  background-color: rgba(0,124,124,.027);
  color: #333;
  font-weight: bold;
  font-size: 1.8rem;
  border-radius: 2px 5px;
  cursor: pointer;
}
.products {
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>
