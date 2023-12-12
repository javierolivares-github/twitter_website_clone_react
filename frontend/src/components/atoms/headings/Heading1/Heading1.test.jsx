import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Heading1 from "./Heading1";

describe('Heading1', () => {

  test('should renders the heading1 component, the correct h2 html tag, and a text inside', () => {
    render(
      <Heading1 weight='font-bold' isDarkTheme={false}>
        This is the Heading1 bold component!
      </Heading1>
    );
    // screen.debug();  
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveTextContent(
      /This is the Heading1 bold component!/i
    );
  });

  test('when weight prop is font-bold, should has the TailwindCSS font-bold class', () => {
    render(
      <Heading1 weight='font-bold' isDarkTheme={false}>
        This is the Heading1 bold component!
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toHaveClass('font-bold');
  });

  test('when isDarkTheme prop is false, should has the custom TailwindCSS text-secondary-15 class', () => {
    render(
      <Heading1 weight='font-bold' isDarkTheme={false}>
        This is the Heading1 bold component!
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toHaveClass('text-secondary-15');
  });
})