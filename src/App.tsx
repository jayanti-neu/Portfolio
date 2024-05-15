// import "./App.css";
import { Header } from "./pages/Header";
import { MainPage } from "./pages/MainPage";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen max-h-full border-4 border-green-200">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
