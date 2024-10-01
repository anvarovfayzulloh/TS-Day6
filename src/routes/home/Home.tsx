import { Link } from "react-router-dom";
import { TTodo } from "../../types";
import { Button, notification } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState<TTodo[]>([]);

  useEffect(() => {
    const storedItems: TTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    setItems(storedItems);
  }, []);

  const handleDeleteTodo = (id: string) => {
    const updatedItems = items.filter((item: TTodo) => item.id !== id);

    localStorage.setItem('todos', JSON.stringify(updatedItems));
    setItems(updatedItems);

    notification.success({
      message: 'Task Deleted',
      description: 'The task has been successfully deleted.',
      placement: 'topRight',
    });
  };

  return (
    <div className="flex flex-col font-bold text-gray-800 p-6 bg-gray-50 min-h-screen w-full h-full">
      <div className="flex flex-col gap-4 w-full">
        {items.length > 0 ? (
          items.map((item: TTodo, index: number) => (
            <div key={index} className="transition-transform transform hover:scale-[1.01] duration-200">
              <div className="p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-md bg-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-gray-500 text-xs">Saving Date: {item.date}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button onClick={() => handleDeleteTodo(item.id)} className="w-[100px]" danger type="primary">Delete</Button>
                  <Link to={`/todo/${item.id}`} className="w-[100px] px-1 py-1 text-[14px] h-32px text-center bg-[#1677FF] text-white rounded-md font-normal">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 flex items-center justify-center">Tasks not found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
