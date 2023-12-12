import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconLocation from "./ButtonIconLocation";

describe('ButtonIconLocation', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconLocation isDarkTheme />
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('button-location-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconLocation isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-location-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconLocation />
    );
    const buttonElement = screen.getByTestId('button-location-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <ButtonIconLocation onClick={handleClick} />
    );
    const buttonElement = screen.getByTestId('button-location-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})