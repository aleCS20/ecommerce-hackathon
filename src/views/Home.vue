<template>
  <div class="container mx-auto px-4 py-10 space-y-12">
    <section class="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 p-12 rounded-3xl text-white shadow-2xl flex items-center gap-10">
      <div class="flex-1 space-y-4">
        <h1 class="text-5xl font-black tracking-tighter">Tecnologia iRede</h1>
        <p class="text-xl text-emerald-100 max-w-xl">Garanta o melhor setup no Hackathon TIC 12.</p>
        <Button label="Ver Novidades" severity="success" raised class="p-button-lg" />
      </div>
      <i class="pi pi-desktop text-9xl text-emerald-500 opacity-20"></i>
    </section>

    <section>
      <div class="flex justify-between items-center mb-8 border-b pb-4">
        <h2 class="text-2xl font-extrabold text-gray-900 tracking-tight">Produtos em Destaque</h2>
        <span class="text-gray-500 font-medium">{{ products.length }} itens</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import ProductCard from '../components/ProductCard.vue';
import { MOCK_PRODUCTS } from '../services/MockData'; 

export default defineComponent({
  components: { Button, ProductCard },
  data() {
    return {
      products: MOCK_PRODUCTS
    };
  }
});
</script>
