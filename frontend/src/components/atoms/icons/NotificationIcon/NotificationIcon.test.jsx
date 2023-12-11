import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NotificationIcon from "./NotificationIcon";

describe('NotificationIcon', () => {
  test('Should renders the component.', () => {
    render(
      <NotificationIcon size="24" fill="#172936" isFilled={false}/>
    );
    screen.debug();  
  });

  test('The component should render a svg element.', () => {
    render(
      <NotificationIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('notification-outline-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <NotificationIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('notification-outline-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #000000', () => {
    render(
      <NotificationIcon size="24" fill="#172936" isFilled={false}/>
    );
    const pathElement = screen.getByTestId('notification-outline-content');
    expect(pathElement).toHaveAttribute('fill', '#172936');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <NotificationIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('notification-outline-container');
    expect(svgElement).toHaveAttribute('data-testid', 'notification-outline-container');
  });

});