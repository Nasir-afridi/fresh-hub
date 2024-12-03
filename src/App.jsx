import TopNav from "./components/nav/TopNav";
import AppRoutes from "./AppRoutes";
import "./scss/index.scss";

function App() {
  return (
    <div className="container-1">
      <TopNav />
      <AppRoutes />
    </div>
  );
}

export default App;
