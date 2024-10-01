import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            id: Date.now().toString(),
            title,
            description,
            date: new Date().toISOString().split('T')[0],
        };

        const existingItems = JSON.parse(localStorage.getItem('todos') || '[]');
        existingItems.push(formData);
        localStorage.setItem('todos', JSON.stringify(existingItems));

        location.reload();  
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input required value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300" >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
