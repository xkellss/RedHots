import {Route,Routes} from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <Layout>
      <Routes>
          <Route path="/" element={<MenuPage/>}/>
      </Routes>
      </Layout>
  );
}

export default App;
