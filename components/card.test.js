/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "./card"
import { createRoot } from 'react-dom/client';


let container = null;
let root = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container)
});

afterEach(() => {
  // cleanup on exiting
  root.unmount()
  container.remove();
  container = null;
});

it("renders with description given", () => {
  act(() => {
    root.render(<Card description={"Camisa blanca"}/>);
  });
  expect(container.textContent).toContain("Camisa blanca");
});