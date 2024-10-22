<script setup>
import { useSidebarStore } from "../../store/index.js";
import { ref } from "vue";

const sidebarStore = useSidebarStore();

const props = defineProps(["items", "page"]);
const items = ref(props.items);
const openDropdownIndex = ref(null); // Track which dropdown is open

const handleItemClick = (index) => {
  if (props.items[index].children) {
    // Prevent navigation if there are children
    openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
  } else {
    // Proceed with navigation for leaf items
    sidebarStore.selected = props.items[index].label;
    // Navigate to the route or perform other actions
  }
};
</script>

<template>
  <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
    <template v-for="(childItem, index) in items" :key="index">
      <li>
        <router-link
          :to="childItem.route"
          @click.prevent="handleItemClick(index)"
          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
          :class="{
            '!text-white': childItem.label === sidebarStore.selected,
          }"
        >
          {{ childItem.label }}
        </router-link>

        <!-- Dropdown content -->
        <div v-if="openDropdownIndex === index" class="ml-4">
          <!-- Render child items if they exist -->
          <SidebarDropdown
            v-if="childItem.children"
            :items="childItem.children"
            :page="page"
          />
        </div>
      </li>
    </template>
  </ul>
</template>
