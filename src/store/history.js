//引入mobx讲 history 分发到各个组件
import { observable } from "mobx";
class TodoList {
  // 利用
 @observable history = {}; 
}
 
export default new TodoList();