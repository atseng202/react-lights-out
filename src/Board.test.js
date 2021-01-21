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

/* ******************** Cell Click Tests  ******************************* */

describe("cell clicking", function () {
  it("correctly toggles the cells as lit/not lit (all sides + clicked cell)", function () {

    const { container, debug } = render(
      <Board 
        nrows={3}
        ncols={3}
        chanceLightStartsOn={1}
      />
    );
  
    fireEvent.click(container.querySelectorAll("tr")[1].querySelectorAll("td")[1]);
    expect(container.querySelectorAll("tr")[1].querySelectorAll("td")[1]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[0].querySelectorAll("td")[1]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[2].querySelectorAll("td")[1]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[1].querySelectorAll("td")[0]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[1].querySelectorAll("td")[2]).not.toContainHTML("Cell-lit");      
    
    // expect(container).not.toContainHTML("Cell-lit");
    // expect(container).toMatchSnapshot();
  });

  it("correctly toggles the cells as lit/not lit (top left corner)", function () {

    const { container, debug } = render(
      <Board 
        nrows={3}
        ncols={3}
        chanceLightStartsOn={1}
      />
    );
  
    fireEvent.click(container.querySelectorAll("tr")[0].querySelectorAll("td")[0]);
    expect(container.querySelectorAll("tr")[0].querySelectorAll("td")[0]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[1].querySelectorAll("td")[0]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[0].querySelectorAll("td")[1]).not.toContainHTML("Cell-lit");      
    
    // expect(container).not.toContainHTML("Cell-lit");
    // expect(container).toMatchSnapshot();
  });
  
  it("correctly toggles the cells as lit/not lit (bottom right corner)", function () {

    const { container, debug } = render(
      <Board 
        nrows={3}
        ncols={3}
        chanceLightStartsOn={1}
      />
    );
  
    fireEvent.click(container.querySelectorAll("tr")[2].querySelectorAll("td")[2]);
    expect(container.querySelectorAll("tr")[2].querySelectorAll("td")[2]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[2].querySelectorAll("td")[1]).not.toContainHTML("Cell-lit");      
    expect(container.querySelectorAll("tr")[1].querySelectorAll("td")[2]).not.toContainHTML("Cell-lit");      
    
    // expect(container).not.toContainHTML("Cell-lit");
    // expect(container).toMatchSnapshot();
  });
  // end
});

/* ******************** End of Game Tests  ******************************* */

describe("end of game", function () {
  it("win message properly displays when no lit cells", function () {

    const { container, debug } = render(
      <Board 
        chanceLightStartsOn={0}
      />
    );
  
    expect(container.querySelector(".Board-winMsg")).toContainHTML("Winner");
  });
  
  it("no win message there are lit cells", function () {

    const { container, debug } = render(
      <Board 
        chanceLightStartsOn={1}
      />
    );
  
    expect(container.querySelector(".Board-winMsg")).toBe(null);
  });
  // end
});


