<template>
  <LayoutPublic>
    <AddTask :onSubmit="handleSubmit" />
    <TaskList :taskData="taskList" :checkTask="handleCheck" :deleteTask="handleDelete" />
  </LayoutPublic>
</template>
<script setup>
import LayoutPublic from '@/components/layout/LayoutPublic.vue';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
import { ref } from 'vue';
const taskList = ref([]);
const checkList = ref([]);

const handleSubmit = (data) => taskList.value = [...taskList.value, data];
const handleCheck = (index) => {
  const pickData = taskList.value[index];
  checkList.value = [...checkList.value, pickData];
  handleDelete(index);
};
const handleDelete = (index) => taskList.value.splice(index, 1);
</script>