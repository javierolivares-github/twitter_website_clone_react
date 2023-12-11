import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NewsIcon from "./NewsIcon";

describe('NewsIcon', () => {
  test('Should renders the component.', () => {
    render(
      <NewsIcon size="24" fill="#172936" />
    );
    screen.debug();
  });

  test('The component should render a svg element.', () => {
    render(
      <NewsIcon size="24" fill="#172936" />
    );
    const svgElement = screen.getByTestId('news-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <NewsIcon size="24" fill="#172936" />
    );
    const svgElement = screen.getByTestId('news-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #172936', () => {
    render(
      <NewsIcon size="24" fill="#172936" />
    );
    const pathElement = screen.getByTestId('news-content');
    expect(pathElement).toHaveAttribute('fill', '#172936');
  });
})