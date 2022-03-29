import Header from "./components/Header";
import DataCard from "./components/DataCard";
import DropdownMenu from "./components/DropdownMenu";
import DataChart from "./components/DataChart";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <DataCard />
      <DropdownMenu />
      <DataChart />
    </div>
  );
}

export default App;
