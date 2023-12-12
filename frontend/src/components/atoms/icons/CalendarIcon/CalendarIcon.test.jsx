import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CalendarIcon from "./CalendarIcon";

describe('CalendarIcon', () => {

  test('The component should render a svg element.', () => {
    render(
      <CalendarIcon size="24" fill="#172936" />
    );
    // screen.debug();
    const svgElement = screen.getByTestId('calendar-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <CalendarIcon size="24" fill="#172936" />
    );
    const svgElement = screen.getByTestId('calendar-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

});