import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconAnalytics from "./ButtonIconAnalytics";

describe('ButtonIconAnalytics', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconAnalytics isDarkTheme />
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('button-analytics-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconAnalytics isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-analytics-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconAnalytics />
    );
    const buttonElement = screen.getByTestId('button-analytics-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <ButtonIconAnalytics onClick={handleClick} />
    );
    const buttonElement = screen.getByTestId('button-analytics-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})