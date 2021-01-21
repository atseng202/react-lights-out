import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

/* ******************** Smoke Tests  ******************************* */
describe("smoke tests for Board", function () {
  it("renders without crashing", function () {

    render(<Board />);
  });
  // end
});

/* ******************** Snapshot Tests  ******************************* */

describe("snapshot for individual Board", function () {
  it("renders accurate board from provided props", function () {

    const { container, debug } = render(
      <Board 
        chanceLightStartsOn={0}
      />
    );
  
    expect(container).not.toContainHTML("Cell-lit");
    expect(container).toMatchSnapshot();
  });
  // end
});


