import { Header } from "./components/Header/Header";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Counter from "./components/Counter/Counter";

function App() {
  const items = [
    {
      name: "First item",
      href: "#",
    },
    {
      name: "Second item",
      href: "#",
    },
    {
      name: "Third item",
      href: "#",
    },
  ];

  return (
    <div className="app">
      <Header />
      <div>
        <Sidebar items={items} />
      </div>
      <Counter />
    </div>
  );
}

export default App;
