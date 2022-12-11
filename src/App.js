import { Layout, GlobalStyle, TodoInput, TodoContainer } from "./components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TodoInput />
        <TodoContainer />
      </Layout>
    </>
  );
};

export default App;
