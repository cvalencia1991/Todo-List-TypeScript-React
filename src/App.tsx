
import TodoForm from "./components/TodoForm";

const App = (): JSX.Element => {
  return (
    <main className="flex flex-col absolute h-full justify-between">
      <TodoForm/>
      <div className="w-full  h-24 bg-none desktop:bg-white "></div>
    </main>
  );
};

export default App;


