import { FormEvent, useState } from "react";
import ViewTasks from "./ViewTasks";

export interface Task {
  title: string;
  description: string;
}

const Home: React.FC<Task> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };

  const removeTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="task-name">
          <label htmlFor="">Task : </label>
          <input
            type="text"
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <label htmlFor="">Description : </label>
          <input
            type="text"
            name=""
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      {tasks.map((item, index) => (
        <ViewTasks
          key={index}
          title={item.title}
          description={item.description}
          onRemove={() => removeTask(index)}
        />
      ))}
    </div>
  );
};

export default Home;
