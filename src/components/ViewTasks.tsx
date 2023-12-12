import { FunctionComponent } from "react";
import { Task } from "./Home";

interface ViewTasksProps extends Task {
  onRemove: () => void;
}

const ViewTasks: FunctionComponent<ViewTasksProps> = ({
  title,
  description,
  onRemove,
}) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default ViewTasks;
