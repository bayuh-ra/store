import { describe, expect } from "vitest";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

    fireEvent.change(txt, { target: { value: "Sample" } });
    expect(txt.value).toBe("Sample");

    //Test of checkbox
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeFalsy();

    //Test of select
    fireEvent.change(select, { target: { value: "desc" } });
    expect(select.value).toBe("desc");
    fireEvent.change(select, { target: { value: "asc" } });
    expect(select.value).toBe("asc");
  });
});
