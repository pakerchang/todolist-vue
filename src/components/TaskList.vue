<template>
  <LayoutTaskList>
    <RadioGroup class="w-full h-full flex flex-col">
      <RadioGroupLabel class="text-center py-2 shadow-sm">Task List</RadioGroupLabel>
      <RadioGroupOption class="mb-3 h-8" v-for="item in props.data" :key="item">
        {{ item }}
      </RadioGroupOption>
    </RadioGroup>
  </LayoutTaskList>
</template>
<script setup>
import LayoutTaskList from '@/components/layout/LayoutTaskList.vue';
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue';
// import { useTaskList } from "@/store/taskList";
// import { storeToRefs } from 'pinia';

// const store = useTaskList();
// const { getTaskList } = storeToRefs(useTaskList);
const props = defineProps({
  data: Array
});

console.log(props.data);


</script>