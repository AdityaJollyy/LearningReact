import { useState } from "react";

function App() {
    const [color, setColor] = useState("bg-red-300");

    return (
        <div className={`h-screen ${color}`}>
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 max-w-[90vw] bg-pink-100 rounded-full px-4 py-2 ">
                <button
                    onClick={() => setColor("bg-blue-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-blue-300/50 transition-colors duration-300"
                >
                    Blue
                </button>
                <button
                    onClick={() => setColor("bg-purple-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-300/50 transition-colors duration-300"
                >
                    Lavendar
                </button>
                <button
                    onClick={() => setColor("bg-green-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-green-300/50 transition-colors duration-300"
                >
                    Green
                </button>
                <button
                    onClick={() => setColor("bg-yellow-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-yellow-300/50 transition-colors duration-300"
                >
                    Yellow
                </button>
                <button
                    onClick={() => setColor("bg-pink-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-pink-300/50 transition-colors duration-300"
                >
                    Pink
                </button>
                <button
                    onClick={() => setColor("bg-indigo-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-indigo-300/50 transition-colors duration-300"
                >
                    Indigo
                </button>
                <button
                    onClick={() => setColor("bg-gray-300")}
                    className="w-24 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-300/50 transition-colors duration-300"
                >
                    Gray
                </button>
            </div>
        </div>
    );
}

export default App;
