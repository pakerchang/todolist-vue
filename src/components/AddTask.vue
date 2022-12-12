<script setup>
import { useTaskList } from "@/store/taskList";
import { Combobox, ComboboxInput } from "@headlessui/vue";
import LayoutAddTask from '@/components/layout/LayoutAddTask.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const taskQuery = ref('');
const taskStore = useTaskList();

const props = defineProps({
  onSubmit: Function
});

</script>
<template>
  <LayoutAddTask>
    <template #title>
      <h1>Add Task</h1>
    </template>
    <template #taskBar>
      <Combobox>
        <div class="w-full flex">
          <ComboboxInput @change="taskQuery = $event.target.value" @keyup.enter="props.onSubmit(taskQuery)" />
          <button @click="props.onSubmit(taskQuery)">
            <PlusIcon class="w-6 h-6" />
          </button>
        </div>
      </Combobox>
    </template>
  </LayoutAddTask>
</template>