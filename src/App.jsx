import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <FilterProductTable>
      <SearchBar />
      <ProductTable />
    </FilterProductTable>
  );
}
export default App;
