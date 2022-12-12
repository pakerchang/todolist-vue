import { defineStore } from "pinia";

export const useTaskList = defineStore("taskListStore", {
  state: () => {
    return {
      taskList: [1, 2, 3, 4],
    };
  },
  getters: {
    getTaskList: (state) => state.taskList,
  },
  actions: {
    addTask(data) {
      this.taskList = [...this.taskList, data];
    },
  },
});
