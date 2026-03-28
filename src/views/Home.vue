<template>
  <div class="space-y-10">
    <section class="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-3xl p-12 text-white shadow-2xl">
      <h2 class="text-5xl font-black mb-4">Tecnologia de Ponta</h2>
      <p class="text-xl text-emerald-100 mb-8">Confira as melhores ofertas do Hackathon iRede.</p>
      <Button label="Ver Ofertas" severity="success" raised />
    </section>

    <section>
      <div class="flex justify-between items-center mb-8">
        <h3 class="text-2xl font-bold text-gray-800">Produtos em Destaque</h3>
        <span class="text-gray-500">{{ products.length }} itens encontrados</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" 
             class="cursor-pointer" @click="$router.push(`/product/${product.id}`)">
          <ProductCard :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import ProductCard from '@/components/ProductCard.vue';
import { MOCK_PRODUCTS } from '@/services/MockData';

export default defineComponent({
  components: { Button, ProductCard },
  data() {
    return { products: MOCK_PRODUCTS };
  }
});
</script>
