import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AnalyticsIcon from "./AnalyticsIcon";

describe('AnalyticsIcon', () => {
  test('The component should render a svg element.', () => {
    render(
      <AnalyticsIcon size="24" fill="#000000" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('analyticsIcon-outline');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <AnalyticsIcon size="24" fill="#000000" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('analyticsIcon-outline');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #000000', () => {
    render(
      <AnalyticsIcon size="24" fill="#000000" isFilled={false}/>
    );
    const pathElement = screen.getByTestId('analyticsIcon-outline-content');
    expect(pathElement).toHaveAttribute('fill', '#000000');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <AnalyticsIcon size="24" fill="#000000" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('analyticsIcon-outline');
    expect(svgElement).toHaveAttribute('data-testid', 'analyticsIcon-outline');
  });


})