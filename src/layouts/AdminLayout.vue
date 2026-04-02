<template>
  <div class="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
    <aside class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div class="p-6 border-b border-slate-800">
        <h2 class="text-xl font-black text-emerald-500 tracking-widest uppercase">Admin Panel</h2>
        <p class="text-xs text-slate-500 mt-1 italic">Hackathon 2026 [cite: 4]</p>
      </div>
      
      <nav class="flex-1 p-4 space-y-2">
        <router-link to="/admin" class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-colors" active-class="bg-emerald-600 text-white">
          <i class="pi pi-chart-line"></i> Dashboard
        </router-link>
        <router-link to="/admin/products" class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-colors" active-class="bg-emerald-600 text-white">
          <i class="pi pi-box"></i> Gestão de Produtos
        </router-link>
      </nav>

      <div class="p-4 border-t border-slate-800">
        <Button label="Sair" icon="pi pi-power-off" severity="danger" text class="w-full" @click="logout" />
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto p-8">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  name: 'AdminLayout',
  components: { Button },
  methods: {
    logout() {
      localStorage.removeItem('user_role');
      this.$router.push('/');
    }
  }
});
</script>
