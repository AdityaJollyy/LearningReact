import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");

    const addValue = () => {
        if (counter < 10) {
            setCounter(counter + 1);
            setMessage("");
        } else {
            setMessage("Maximum limit reached! Cannot exceed +10");
        }
    };

    const subtractValue = () => {
        if (counter > -10) {
            setCounter(counter - 1);
            setMessage("");
        } else {
            setMessage("Minimum limit reached! Cannot go below -10");
        }
    };

    const resetValue = () => {
        setCounter(0);
        setMessage("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    Counter App
                </h1>
                <p className="text-gray-500 text-center mb-8">
                    Learn useState hook
                </p>

                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                    <p className="text-sm text-gray-600 text-center mb-2">
                        Counter Value
                    </p>
                    <h2 className="text-5xl font-bold text-indigo-600 text-center">
                        {counter}
                    </h2>
                </div>

                {message && (
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-4 text-center text-sm">
                        {message}
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <button
                        onClick={addValue}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    >
                        Add
                    </button>
                    <button
                        onClick={subtractValue}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    >
                        Subtract
                    </button>
                    <button
                        onClick={resetValue}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
