<template>
<div class="card mb-4 box-shadow">
    <img class="card-img-top"
      data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
      alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
      :src="product.pictureUrl"
      data-holder-rendered="true">
    <div class="card-body">
        <a href="">
            <p class="card-text">{{product?.name}}</p>
        </a>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/models/Product';
import { defineProps } from 'vue';
defineProps<{
    product: IProduct
}>();

</script>

<style scoped>

</style>