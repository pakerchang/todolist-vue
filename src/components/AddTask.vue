<script setup>
import { useTaskList } from "@/store/taskList";
import { Combobox, ComboboxInput } from "@headlessui/vue";
import { PlusIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const taskQuery = ref('');
const taskStore = useTaskList();

const onSubmit = () => taskStore.addTask(taskQuery.value);

</script>
<template>
  <Combobox>
    <div class="w-full flex">
      <ComboboxInput @change="taskQuery = $event.target.value" @keyup.enter="onSubmit" />
      <button @click="onSubmit">
        <PlusIcon class="w-6 h-6" />
      </button>
    </div>
  </Combobox>
</template>