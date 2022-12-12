<script setup>
import { Combobox, ComboboxInput } from "@headlessui/vue";
import LayoutAddTask from '@/components/layout/LayoutAddTask.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const taskQuery = ref('');

const props = defineProps({
  onSubmit: Function
});

</script>
<template>
  <LayoutAddTask>
    <Combobox>
      <div class="w-full flex">
        <ComboboxInput class="w-full rounded-lg px-3 py-2 focus: outline-none" @change="taskQuery = $event.target.value"
          @keyup.enter="props.onSubmit(taskQuery)" placeholder="Add new task" />
        <button class="pr-3" @click="props.onSubmit(taskQuery)">
          <PlusIcon class="w-6 h-6" />
        </button>
      </div>
    </Combobox>
  </LayoutAddTask>
</template>