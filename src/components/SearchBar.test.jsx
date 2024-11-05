import { describe, expect } from "vitest";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { render, screen } from "@testing-library/react";

const SearchbaWrapped = () => {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const [sort, setSort] = useState("asc");

  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
      stockChecked={stockChecked}
      setStockChecked={setStockChecked}
      sort={sort}
      setSort={setSort}
    />
  );
};

describe("SearchBar component", () => {
  it("should render the component", async () => {
    render(<SearchbaWrapped />);

    const txt = await screen.findByTestId("search-text");
    const checkbox = await screen.findByTestId("search-checkbox");
    const select = await screen.findByTestId("search-select");

    expect(txt).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.nextElementSibling.textContect).toBe(
      "Only Show products in stock"
    );
    expect(select).toBeInTheDocument();
  });
});
