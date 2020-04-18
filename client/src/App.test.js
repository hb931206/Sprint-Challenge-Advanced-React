import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/NavBar";

test("renders without crashing", () => {
  render(<App />);
});

test("See if the Card Renders", () => {
  const { getByTestId } = render(<PlayerCard />);
  getByTestId(/card/i);
});
