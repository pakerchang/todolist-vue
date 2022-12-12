<template>
  <LayoutPublic>
    <AddTask :onSubmit="handleSubmit" />
    <TaskList :data="taskList" />
  </LayoutPublic>
</template>
<script setup>
import LayoutPublic from '@/components/layout/LayoutPublic.vue';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
import { ref } from 'vue';
const taskList = ref([1, 2, 3, 4]);
const handleSubmit = (data) => taskList.value = [...taskList.value, data];
</script>