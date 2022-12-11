import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, GlobalStyle, Todo, TodoDetail } from "./components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="todo/:id" element={<TodoDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
