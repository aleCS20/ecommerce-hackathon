<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
    <h2 class="text-3xl font-black mb-8 text-gray-800 flex items-center gap-3">
      <i class="pi pi-check-circle text-emerald-500 text-2xl"></i>
      Finalizar Pedido
    </h2>

    <div v-if="orderPlaced" class="text-center py-20 animate-fadein">
      <i class="pi pi-verified text-7xl text-emerald-500 mb-4"></i>
      <h3 class="text-2xl font-bold text-gray-900">Pedido Confirmado!</h3>
      <p class="text-gray-500 mt-2">Obrigado por comprar na iRede Store.</p>
      <Button label="Voltar para a Loja" class="mt-8 p-button-outlined" @click="$router.push('/')" />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-4">
        <h4 class="font-bold text-lg text-gray-700">Dados de Entrega</h4>
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm font-medium">Nome Completo</label>
          <InputText id="name" v-model="form.name" placeholder="Alessandro ..." />
        </div>
        <div class="flex flex-col gap-2">
          <label for="address" class="text-sm font-medium">Endereço</label>
          <InputText id="address" v-model="form.address" placeholder="Rua, número, bairro" />
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h4 class="font-bold text-lg text-gray-700 mb-4">Resumo</h4>
        <div class="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span class="font-bold">R$ {{ total.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-emerald-600 font-black text-xl border-t pt-4">
          <span>Total:</span>
          <span>R$ {{ total.toFixed(2) }}</span>
        </div>
        <Button 
          label="Confirmar Pagamento" 
          icon="pi pi-credit-card" 
          class="w-full mt-6 p-button-success shadow-lg shadow-emerald-100" 
          :loading="loading"
          @click="processOrder" 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default defineComponent({
  components: { InputText, Button },
  data() {
    return {
      orderPlaced: false,
      loading: false,
      form: { name: '', address: '' },
      total: 1550.50 // Valor viria do seu CartService
    };
  },
  methods: {
    processOrder() {
      if (!this.form.name || !this.form.address) {
        return alert("Preencha os dados de entrega!");
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.orderPlaced = true;
      }, 2000);
    }
  }
});
</script>
