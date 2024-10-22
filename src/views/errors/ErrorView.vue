<template>
  <AdminLayout>
    <div class="mx-auto max-w-242.5">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->
      <NotFoundCard />
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "../../layouts/AdminLayout.vue";
import NotFoundCard from "../../components/Error/NotFoundCard.vue";
import BreadcrumbDefault from "../../components/Breadcrumbs/BreadcrumbDefault.vue";
const pageTitle = ref("Error");
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
</style>
