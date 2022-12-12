<template>
  <LayoutTaskList>
    <!-- Task List -->
    <RadioGroup class="w-1/3 h-full flex flex-col shadow-xl rounded-lg">
      <RadioGroupLabel class="text-center py-2 shadow-sm">Task List</RadioGroupLabel>
      <RadioGroupOption class="my-3 h-8 flex px-4 justify-between items-center" v-for="(item, index) in props.taskData"
        :key="item">
        {{ item }}
        <div>
          <button class="rounded-lg border shadow-md mr-4">
            <CheckIcon class="w-5 h-5" @click="checkTask(index)" />
          </button>
          <button class="rounded-lg border shadow-md ">
            <TrashIcon class="w-5 h-5" @click="deleteTask(index, 'task')" />
          </button>
        </div>
      </RadioGroupOption>
    </RadioGroup>
    <!-- Check List -->
    <RadioGroup class="w-1/3 h-full flex flex-col shadow-xl rounded-lg">
      <RadioGroupLabel class="text-center py-2 shadow-sm">Done</RadioGroupLabel>
      <RadioGroupOption class="my-3 h-8 flex px-4 justify-between items-center" v-for="(item, index) in props.checkData"
        :key="item">
        {{ item }}
        <div>
          <button class="rounded-lg border shadow-md ">
            <TrashIcon class="w-5 h-5" @click="deleteTask(index, 'check')" />
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
  taskData: Array,
  checkData: Array,
  checkTask: Function,
  deleteTask: Function
});



</script>