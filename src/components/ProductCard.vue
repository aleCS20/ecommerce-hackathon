<template>
  <div class="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
       @click="$router.push(`/product/${product.id}`)">
    
    <div class="relative overflow-hidden rounded-2xl h-48 mb-5 bg-gray-50 flex items-center justify-center">
      <img :src="product.image" 
           :alt="product.name" 
           class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
      <div class="absolute top-3 right-3">
        <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
          {{ product.category.title }}
        </span>
      </div>
    </div>

    <div class="flex-1 space-y-2 mb-5">
      <h3 class="text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
        {{ product.name }}
      </h3>
      <p class="text-xs text-gray-500 italic">
        Vendido e entregue por: iRede
      </p>
    </div>

    <div class="mt-auto pt-4 border-t border-gray-100 space-y-4">
      <div class="flex items-baseline gap-1">
        <span class="text-sm font-medium text-gray-400">R$</span>
        <span class="text-3xl font-black text-gray-950 tracking-tight">
          {{ product.price.toFixed(2).replace('.', ',') }}
        </span>
      </div>
      
      <div class="flex gap-3">
        <Button icon="pi pi-eye" severity="secondary" outlined class="p-button-rounded flex-shrink-0" />
        <Button label="Adicionar" icon="pi pi-shopping-cart" class="p-button-success w-full font-bold shadow-lg shadow-emerald-100" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Button from 'primevue/button';
import { Product } from '../models/Product'; 

export default defineComponent({
  name: 'ProductCard',
  components: { Button },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
});
</script>
