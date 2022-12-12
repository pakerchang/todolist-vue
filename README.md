# Todo list temp
## Setup
```script
yarn install
yarn dev
```
[Develop host](http://localhost:3000)

## Deps
Vue@3.2.45
TailwindCSS@3.2.4
HeadlessUI@1.7.5
heroicons@2.0.13

## 檔案結構
```
├── App.vue
├── assets
│  └── vue.svg
├── components
│  ├── AddTask.vue
│  ├── layout
│  │  ├── LayoutAddTask.vue
│  │  ├── LayoutPublic.vue
│  │  └── LayoutTaskList.vue
│  └── TaskList.vue
├── main.js
└── style.css
```

## Components:
Component 結構佈局會單獨使用 `layout` 資料夾的管理
資料交互邏輯集中放至在 `App.vue` 檔案，並透過 Props function 的方式向下操作
### App:
#### 資料層
```js
// App.vue
const taskList = ref([]) // 存放新增後待辦事項;
const checkList = ref([]); // 存放已完成事項
```
#### 事件引用 ( Function )
`handleSubmit` --> 當使用者點擊 `+` 或點擊 `Enter` 時會將輸入資料存入 `taskList`
`handleCheck` --> 當使用者點擊 `TaskItem` 中的確認時，會移除 `taskList` 並將資料轉移至 `checkList` 顯示
`handleDelete` --> 透過 Function props: `type` 區分事件觸發清單，並移除對應的欄位事項 (`taskList` / `checkList`)
### Layouts:
> Path: src/components/layout
1. `LayoutPublic.vue` 主視窗頁面組件佈局
2. `LayoutAddTask.vue` 新增待辦事項組件佈局
3. `LayoutTaskList.vue` 待辦事項列表組件佈局
### TaskBar:
![TaskBar](/screenshot/TaskBar.png)
結構組成：
```html
<div>
  <!-- Input -->
  <!-- Add Button -->
</div>
```
實際檔案可查詢: `AddTask.vue` 內部結構
### TaskList:
![TaskList](/screenshot//TaskList.png)
結構組成：
```html
<div>
  <!-- Task List -->
  <!-- Check List -->
</div>
```
實際檔案可查詢: `TaskList.vue` `<LayoutTaskList>` 內部結構

### TaskItem:
![TaskItem](/screenshot/TaskItem.png)
結構組成：
```html
<div>
  <!-- Task Name -->
  <div>
    <!-- Check Button -->
    <!-- Delete Button -->
  </div>
</div>
```
實際檔案可查詢: `TaskList.vue` `<RadioGroup>` 內部結構
