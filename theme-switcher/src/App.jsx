import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;


// import { useEffect, useState } from "react";
// import { ThemeProvider } from "./contexts/theme";
// import ThemeButton from "./components/ThemeButton";
// import Card from "./components/Card";

// function App() {
//   const [themeMode, setThemeMode] = useState("dark");

//   const darkTheme = () => setThemeMode("dark");
//   const lightTheme = () => setThemeMode("light");

//   //changing the theme
//   useEffect(() => {
//     const root = window.document.documentElement; // Selects <html>
//     root.classList.remove("light", "dark");
//     root.classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">

//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeButton />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>

//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
