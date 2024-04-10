import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemscontainer}>
        {todoItems.map((item) => (
          <Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
