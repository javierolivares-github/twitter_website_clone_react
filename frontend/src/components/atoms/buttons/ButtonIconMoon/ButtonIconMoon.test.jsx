import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconMoon from "./ButtonIconMoon";

describe('ButtonIconMoon', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconMoon isDarkTheme />
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('button-moon-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconMoon isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-moon-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconMoon />
    );
    const buttonElement = screen.getByTestId('button-moon-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <ButtonIconMoon onClick={handleClick} />
    );
    const buttonElement = screen.getByTestId('button-moon-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})