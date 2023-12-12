import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import MoreIcon from "./MoreIcon";

describe('MoreIcon', () => {
  test('The component should render a svg element.', () => {
    render(
      <MoreIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('more-outline-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <MoreIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('more-outline-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <MoreIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('more-outline-container');
    expect(svgElement).toHaveAttribute('data-testid', 'more-outline-container');
  });

});