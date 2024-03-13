<script setup>
import mainLayout from '../../layouts/mainLayout.vue';
import HeroSection from '../../components/HomeComponents/HeroSection.vue';
import supportsection from '../../components/HomeComponents/SSupportSection.vue';
import SafeSection from "../../components/HomeComponents/SafeSection.vue"
import ProductsSection from "../../components/HomeComponents/ProductsSection.vue"
</script>

<template>
  <mainLayout>
    <HeroSection />
    <supportsection />
    <SafeSection />
    <ProductsSection />
  </mainLayout>
</template>