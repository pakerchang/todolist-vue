<template>
  <LayoutPublic>
    <!-- Task Add bar-->
    <LayoutAddTask>
      <template #title>
        <h1>Add Task</h1>
      </template>
      <template #taskBar>
        <AddTask />
      </template>
    </LayoutAddTask>
    <!-- Task List -->
  </LayoutPublic>
</template>
<script setup>
import LayoutPublic from '@/components/layout/LayoutPublic.vue';
import AddTask from '@/components/AddTask.vue';
import LayoutAddTask from '@/components/layout/LayoutAddTask.vue';
</script>