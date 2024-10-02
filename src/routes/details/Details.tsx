import { useParams } from "react-router-dom";
import { TTodo } from "../../types";

const Details = () => {
    const { id } = useParams();
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    //@ts-ignore
    const todo = todos.find((todo: TTodo) => todo.id === id);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-full p-4">
            {todo ? (
                <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full transition-transform transform hover:scale-105 duration-200">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 capitalize">{todo.title}</h2>
                    <h3 className="text-xl font-medium text-gray-700 mb-4">{todo.description}</h3>
                    <p className="text-gray-600 text-sm">Saving Date: <span className="font-bold">{todo.date}</span></p>
                </div>
            ) : (
                <p className="text-gray-600 text-lg">Task not found</p>
            )}
        </div>
    );
}

export default Details;
