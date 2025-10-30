import Hotels from "./components/Hotels";
import HotelByTitle from "./components/HotelByTitle";
import "./App.css"

export default function App() {
  return (
    <>
      <main>
        <Hotels />
        <HotelByTitle title="Sunset Resort" />
      </main>
    </>
  );
}
