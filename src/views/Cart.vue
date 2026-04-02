<template>
  <div class="max-w-5xl mx-auto p-4">
    <h1 class="text-3xl font-black mb-8 text-gray-800">Meu Carrinho</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 space-y-4">
        <div v-for="item in cartItems" :key="item.product.id" 
             class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <img :src="item.product.image" class="w-20 h-20 rounded-lg object-cover" />
          <div class="flex-1">
            <h4 class="font-bold text-gray-700">{{ item.product.name }}</h4>
            <p class="text-emerald-600 font-bold">R$ {{ item.product.price.toFixed(2) }}</p>
          </div>
          <InputNumber v-model="item.quantity" showButtons buttonLayout="horizontal" class="w-32" />
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
        <h3 class="text-xl font-bold mb-4 text-gray-800">Resumo do Pedido</h3>
        <div class="flex justify-between items-center text-2xl font-black border-t border-gray-100 pt-4">
          <span>Total:</span>
          <span class="text-emerald-600">R$ {{ calculateTotal() }}</span>
        </div>
        <Button label="Ir para Checkout" class="w-full mt-6 p-button-success" @click="$router.push('/checkout')" />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { MOCK_PRODUCTS } from '../services/MockData';

export default defineComponent({
  components: { InputNumber, Button },
  data() {
    return {
      
      cartItems: [
        { product: MOCK_PRODUCTS[0], quantity: 1 },
        { product: MOCK_PRODUCTS[1], quantity: 2 }
      ]
    };
  },
  methods: {
    calculateTotal() {
      const total = this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
      return total.toFixed(2);
    }
  }
});
</script>