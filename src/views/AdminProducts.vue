<template>
  <div class="card bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Gestão de Inventário</h2>
      <Button label="Novo Produto" icon="pi pi-plus" severity="success" size="small" />
    </div>

    <DataTable :value="products" stripedRows class="p-datatable-sm text-sm" responsiveLayout="stack">
      <Column field="id" header="Cód."></Column>
      <Column field="name" header="Produto" sortable></Column>
      <Column field="category.title" header="Categoria"></Column>
      <Column field="price" header="Preço">
        <template #body="slotProps"> R$ {{ slotProps.data.price.toFixed(2) }} </template>
      </Column>
      <Column header="Status">
        <template #body> <Tag value="Ativo" severity="success" /> </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import { MOCK_PRODUCTS } from '@/services/MockData';

export default defineComponent({
  components: { DataTable, Column, Button, Tag },
  data() {
    return { products: MOCK_PRODUCTS };
  }
});
</script>

