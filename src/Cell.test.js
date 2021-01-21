import React from "react";

const flipCellsAroundMe = jest.fn();

import { render } from "@testing-library/react";
import Cell from "./Cell";

/* ******************** Smoke Tests  ******************************* */
describe("smoke tests for Cell", function () {
  it("renders without crashing", function () {

    render(
      <table>
        <tbody>
          <tr>
            <Cell flipCellsAroundMe={flipCellsAroundMe} isLit={true} />
          </tr>
        </tbody>
      </table>
    );
  });
  // end
});

/* ******************** Snapshot Tests  ******************************* */
// NOTE: is there a better way to test that Cell renders correctly
// <td> cannot be rendered in isolation
describe("snapshot for individual cell", function () {
  it("matches a lit Cell", function () {

    const { container, debug } = render(
      <table>
        <tbody>
          <tr>
            <Cell flipCellsAroundMe={flipCellsAroundMe} isLit={true} />
          </tr>
        </tbody>
      </table>
    );
    expect(container
      .querySelector("tr")
      .firstChild
      .classList
      .contains("Cell-lit")).toEqual(true);

    expect(container).toMatchSnapshot();
  });

  it("matches an unlit Cell", function () {
    const { container, debug } = render(
      <table>
        <tbody>
          <tr>
            <Cell flipCellsAroundMe={flipCellsAroundMe} isLit={false} />
          </tr>
        </tbody>
      </table>
    );
    expect(container
      .querySelector("tr")
      .firstChild
      .classList
      .contains("Cell-lit")).toEqual(false);
    expect(container).toMatchSnapshot();
  });
  // end
});

