<template>
  <LayoutTaskList>
    <RadioGroup class="w-full h-full flex flex-col">
      <RadioGroupLabel class="text-center py-2 shadow-sm">Task List</RadioGroupLabel>
      <RadioGroupOption class="my-3 h-8 flex px-4 justify-between items-center" v-for="(item, index) in props.taskData"
        :key="item">
        {{ item }}
        <div>
          <button class="rounded-lg border shadow-md mr-4">
            <CheckIcon class="w-5 h-5" @click="checkTask(index)" />
          </button>
          <button class="rounded-lg border shadow-md ">
            <TrashIcon class="w-5 h-5" @click="deleteTask(index)" />
          </button>
        </div>
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
import { CheckIcon, TrashIcon } from '@heroicons/vue/24/outline';
const props = defineProps({
  listTitle: String,
  taskData: Array,
  checkList: Array,
  checkTask: Function,
  deleteTask: Function
});



</script>