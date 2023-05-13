import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

const TaskList = () => {
	const [tasks, setTask] = useState([]);
	const loadTask = async () => {
		await getAllTasks().then((res) => {
			setTask(res.data);
		});
	};
	useEffect(() => {
		loadTask();
	}, []);

	return (
		<div>
			{tasks.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
		</div>
	);
};

export default TaskList;
