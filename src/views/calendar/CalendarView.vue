<script setup>
import { ref } from "vue";
import BreadcrumbDefault from "../../components/Breadcrumbs/BreadcrumbDefault.vue";
import CalendarCard from "../../components/calendar/CalendarCard.vue";
import AdminLayout from "../../layouts/AdminLayout.vue";

const pageTitle = ref("Calender");
</script>

<template>
  <AdminLayout>
    <div class="mx-auto max-w-7xl">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->
      <CalendarCard />
    </div>
  </AdminLayout>
</template>
