<template>
  <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-white rounded-2xl shadow">
    <img :src="product.image" :alt="product.name" class="rounded-xl w-full" />
    <div class="space-y-6">
      <h1 class="text-4xl font-bold">{{ product.name }}</h1>
      <Tag :value="product.category.title" severity="info" />
      <p class="text-gray-600 text-lg">{{ product.description }}</p>
      <p class="text-4xl font-black text-emerald-600">R$ {{ product.price.toFixed(2) }}</p>
      <Button label="Adicionar ao Carrinho" icon="pi pi-cart-plus" class="p-button-lg w-full" @click="addToCart" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { MOCK_PRODUCTS } from '../services/MockData';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

export default defineComponent({
  components: { Tag, Button },
  data() {
    return { product: MOCK_PRODUCTS.find(p => p.id === Number(this.$route.params.id)) };
  },
  methods: {
    addToCart() {
      // Integração com o service de carrinho criado na Atividade 2
      alert(`${this.product?.name} adicionado!`);
    }
  }
});
</script>
