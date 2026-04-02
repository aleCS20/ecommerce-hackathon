<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Menubar :model="menuItems" class="rounded-none border-b border-gray-200 px-6 md:px-20 py-4 bg-white sticky top-0 z-50">
      <template #start>
        <div class="flex items-center gap-2 cursor-pointer" @click="$router.push('/')">
          <i class="pi pi-shopping-bag text-2xl text-emerald-600 font-bold"></i>
          <span class="text-xl font-black text-gray-900 tracking-tighter">IREDE <span class="text-emerald-600">STORE</span></span>
        </div>
      </template>
      <template #end>
        <Button icon="pi pi-user" rounded text severity="secondary" />
      </template>
    </Menubar>

    <main class="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
      <router-view />
    </main>

    <footer class="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
      <p>&copy; 2026 iRede Store - Hackathon Fullstack [cite: 1, 4]</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

export default defineComponent({
  name: 'DefaultLayout',
  components: { Menubar, Button },
  data() {
    return {
      menuItems: [
        { label: 'Vitrine', icon: 'pi pi-th-large', command: () => this.$router.push('/') },
        { label: 'Carrinho', icon: 'pi pi-shopping-cart', command: () => this.$router.push('/cart') },
        { label: 'Admin', icon: 'pi pi-lock', command: () => this.$router.push('/admin') }
      ]
    };
  }
});
</script>
