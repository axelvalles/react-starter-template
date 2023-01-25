import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  todo: string;
}

interface Props {
  title: string;
}

export default function TestingForm({ title }: Props) {
  // states
  const [todoList, setTodoList] = useState<String[]>([]);
  // react-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>();
  // methods
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setTodoList((prev) => [...prev, data.todo]);
    reset();
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul role="list">
        {todoList.map((todo, idx) => (
          <li role="listitem" key={idx}>
            {todo}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)} role="form">
        <input
          {...register("todo", { required: true })}
          aria-invalid={errors.todo ? "true" : "false"}
          placeholder="Agrega una tarea"
          type="text"
          role="textbox"
        />
        {errors.todo?.type === "required" && (
          <p role="alert">Esta campo es obligatorio</p>
        )}
        <button role="button" type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
  );
}
