import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Heading1 from "./Heading1";

describe('Heading1', () => {

  test('Should renders the heading1 component, the correct h2 html tag, and a text inside', () => {
    render(
      <Heading1 weight='font-bold' color="text-secondary-15">
        This is the Heading1 bold component!
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveTextContent(
      /This is the Heading1 bold component!/i
    );
  });

  test('When weight prop is font-bold, should has the class font-bold', () => {
    render(
      <Heading1 weight='font-bold' color="text-secondary-15">
        This is the Heading1 bold component!
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toHaveClass('font-bold');
  });

  test('when color prop is text-secondary-15, should have the class text-secondary-15', () => {
    render(
      <Heading1 weight='font-bold' color="text-secondary-15">
        This is the Heading1 bold component!
      </Heading1>
    );
    const headingElement = screen.getByTestId('heading1-container');
    expect(headingElement).toHaveClass('text-secondary-15');
  });
})