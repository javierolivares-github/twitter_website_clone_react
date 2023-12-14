import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Heading2 from "./Heading2";

describe('Heading2', () => {

  test('should renders the Heading2 component, the correct h3 html tag, and a text inside', () => {
    render(
      <Heading2 weight='font-bold' color="text-secondary-15">
        This is the Heading2 bold component!
      </Heading2>
    );
    // screen.debug();  
    const headingElement = screen.getByTestId('heading2-container');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H3');
    expect(headingElement).toHaveTextContent(
      /This is the Heading2 bold component!/i
    );
  });

  test('when weight prop is font-bold, should have the class font-bold', () => {
    render(
      <Heading2 weight='font-bold' color="text-secondary-15">
        This is the Heading2 bold component!
      </Heading2>
    );
    const headingElement = screen.getByTestId('heading2-container');
    expect(headingElement).toHaveClass('font-bold');
  });

  test('When color prop is text-secondary-15, should have the class text-secondary-15', () => {
    render(
      <Heading2 weight='font-bold' color="text-secondary-15">
        This is the Heading2 bold component!
      </Heading2>
    );
    const headingElement = screen.getByTestId('heading2-container');
    expect(headingElement).toHaveClass('text-secondary-15');
  });
})