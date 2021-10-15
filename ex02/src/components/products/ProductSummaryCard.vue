<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <!-- toFixed(2): 소수의 자리수 길이 2 제한함. -->
    <h5 class="prcie">Price ${{ product.price.toFixed(2) }}</h5>
    <!-- <p class="description">{{ product.description}}</p> -->
    <p class="text-muted">{{ product.category }}</p>
    
    <button class="view-product-button" @click="$emit('view-product', product)">View Product</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    // description() {  // 부가설명 문단 제한 함수 생성
    //   // 문자열의 글자를 0부터 150줄까지 잘라서 반환한다.
    //   return this.product.description.substring(0, 150)
    // }
  }
}
</script>

<style lang="scss">
  .card {
    width: 40%;
    margin: 30px;
    padding: 10px;
    float: left;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 5px gray;

    h5.price {
      color: gray;
    }

    // p.description {
    //   font-size: .85rem;
    // }
    p.text-muted {
      color: grey;
    }
    
    button.view-product-button {
      padding: 10px;
      background-color: rgb(79, 160, 187);
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: l.15rem;
      border-radius: 5px;
      cursor: pointer;
    }

    @media (min-width: 500px) {
      .card {
        width: 350px;
        margin:10px;
      }
    }
  }
</style>  