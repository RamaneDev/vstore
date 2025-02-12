<template>
<div class="container" style="margin-top: 140px">
    <div class="row">
      <section class="col-3">
        <h5 class="text-warning">Sort</h5>
        <select class="custom-select mb-3">
            <option>Alphabetical</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
        </select>

        <h5 class="text-warning ml-3">Brands</h5>
        <ul class="list-group my-3">
          <li class="list-group-item active">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>

        <h5 class="text-warning ml-3">Types</h5>
        <ul class="list-group my-3">
          <li class="list-group-item active">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </section>
      <section class="col-9">
          <div class="d-flex justify-content-between align-items-center pb-2">
            <header>
                <span>Showing <strong>10</strong> of <strong>16</strong> Results</span>
            </header>
            <div class="form-inline mt-2">
                <input class="form-control mr-2" style="width: 300px;" placeholder="Search">
                <button class="btn btn-outline-primary my-2">Search</button>
                <button class="btn btn-outline-success my-2 ml-2">Reset</button>
            </div>
          </div>

          <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
                 <ProductItem :product="product" />
           </div>
         </div>
    </section>
  </div>
</div>
</template>

<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue';
import { IProduct } from '@/models/Product';
import { onMounted, ref } from 'vue';
import { useProductList } from '@/composables/useProductList';

const { products, isLoading, error, fetchProducts } = useProductList();

onMounted(() => {
  fetchProducts();

});


</script>

<style scoped>

</style>