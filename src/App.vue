<template>
  <LayoutPublic>
    <AddTask :onSubmit="handleSubmit" />
    <TaskList :taskData="taskList" :checkData="checkList" :checkTask="handleCheck" :deleteTask="handleDelete" />
  </LayoutPublic>
</template>
<script setup>
import LayoutPublic from '@/components/layout/LayoutPublic.vue';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
import { ref } from 'vue';
const taskList = ref(['task 1', 'task 2', 'task 3']);
const checkList = ref([]);

const handleSubmit = (data) => taskList.value = [...taskList.value, data];
const handleCheck = (index) => {
  const pickData = taskList.value[index];
  checkList.value = [...checkList.value, pickData];
  handleDelete(index, 'task');
};
const handleDelete = (index, type) => {
  if (type === 'task') {
    taskList.value.splice(index, 1);
  } else if (type === 'check') {
    checkList.value.splice(index, 1);
  }
};
</script>