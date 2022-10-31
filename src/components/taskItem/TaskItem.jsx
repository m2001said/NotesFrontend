import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import "./taskItem.css";

function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(`/api/tasks/${task._id}`, {
        completed: !isCompleted,
      });

      setIsCompleted(!isCompleted);

      toast.success("Task updated successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className="task-item">
      <td className="task-item-name">
        <div
          className="task-item-checkbox"
          onChange={handleCheckboxClick}
          role="checkbox"
          aria-checked
        >
          <input
            type="checkbox"
            checked={isCompleted}
            disabled={isLoading}
            readOnly
            tabIndex={-1}
          />
        </div>
        <p>{task.title}</p>
      </td>
      <td>
        {isCompleted ? (
          <p className="task-item-completed">Complete</p>
        ) : (
          "Incomplete"
        )}
      </td>
      <td>{moment(task.createdAt).format("MMM Do YY")}</td>
      <td>
        <button
          type="button"
          className="task-item-delete"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
