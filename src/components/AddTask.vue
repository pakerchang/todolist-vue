<script setup>
import { useTaskList } from "@/store/taskList";
import { Combobox, ComboboxInput } from "@headlessui/vue";
import { PlusIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'

</script>
<template>
  <Combobox>
    <div class="w-full flex">
      <ComboboxInput />
      <button>
        <PlusIcon class="w-6 h-6" />
      </button>
    </div>
  </Combobox>
</template>