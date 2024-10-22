<script setup>
import { ref } from "vue";
import BreadcrumbDefault from "../../components/Breadcrumbs/BreadcrumbDefault.vue";
import ProfileCard from "../../components/profile/ProfileCard.vue";
import AdminLayout from "../../layouts/AdminLayout.vue";

const pageTitle = ref("Profile");
</script>

<template>
  <AdminLayout>
    <div class="mx-auto max-w-242.5">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->
      <ProfileCard />
    </div>
  </AdminLayout>
</template>
