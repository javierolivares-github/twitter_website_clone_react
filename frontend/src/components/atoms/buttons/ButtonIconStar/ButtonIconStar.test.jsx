import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconStar from "./ButtonIconStar";

describe('ButtonIconStar', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconStar isDarkTheme />
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('button-star-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconStar isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-star-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconStar />
    );
    const buttonElement = screen.getByTestId('button-star-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <ButtonIconStar onClick={handleClick} />
    );
    const buttonElement = screen.getByTestId('button-star-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})