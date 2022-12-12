import { defineStore } from "pinia";

export const useTaskList = defineStore("taskList", {
  state: () => ({
    taskList: [],
  }),
  getter: {
    getTaskList: (state) => state.taskList,
  },
  actions: {
    addTask(data) {
      this.taskList = [...this.taskList, data];
    },
  },
});
