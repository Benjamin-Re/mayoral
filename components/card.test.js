/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from "./card"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with description given", () => {
  act(() => {
    render(<Card description={"Camisa blanca"}/>, container);
  });
  expect(container.textContent).toContain("Camisa blanca");
});