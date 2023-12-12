import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconGif from "./ButtonIconGif";

describe('ButtonIconGif', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconGif isDarkTheme />
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('button-gif-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconGif isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-gif-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconGif />
    );
    const buttonElement = screen.getByTestId('button-gif-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <ButtonIconGif onClick={handleClick} />
    );
    const buttonElement = screen.getByTestId('button-gif-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})