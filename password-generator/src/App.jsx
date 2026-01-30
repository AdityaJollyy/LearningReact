import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let password = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        for (let i = 1; i <= length; i++) {
            let randomIndex = Math.floor(Math.random() * str.length);
            password += str.charAt(randomIndex);
        }
        setPassword(password);
    }, [length, numberAllowed, charAllowed, setPassword]);  

    const passwordRef = useRef(null);

    const copyToClipboard = () => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 31); // For mobile devices
        window.navigator.clipboard.writeText(password);
    };

    useEffect(() => {
        passwordGenerator();
    }, [passwordGenerator]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-gray-200 p-10 rounded-lg text-black w-full max-w-lg">
                <div className="flex items-center">
                    <input
                        type="text"
                        ref={passwordRef}
                        readOnly
                        value={password}
                        placeholder="Password"
                        className="p-2 text-left border border-gray-400 rounded h-10 shadow-md w-full"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-blue-700 text-white px-2 h-10 rounded w-20 hover:bg-blue-800 ml-0.5 transform transition-transform duration-100 active:scale-95 active:opacity-90"
                    >
                        copy
                    </button>
                </div>

                <div className="flex flex-wrap text-sm font-medium justify-between mt-4">
                    <div className="flex items-center gap-x-2 mr-3">
                        <input
                            type="range"
                            min={6}
                            max={30}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label className="mr-3" htmlFor="numberInput">
                            Numbers
                        </label>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="characterInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
