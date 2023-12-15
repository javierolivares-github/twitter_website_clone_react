import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ButtonIconLogo from "./ButtonIconLogo";

describe('ButtonIconLogo', () => {
  test('The component should render a button element.', () => {
    render(
      <ButtonIconLogo isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-logo-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class hover:bg-transparent-10.', () => {
    render(
      <ButtonIconLogo isDarkTheme />
    );
    const buttonElement = screen.getByTestId('button-logo-container');
    expect(buttonElement).toHaveClass('hover:bg-transparent-10');
  });

  test('When the isDarkTheme is false, the component should contain the CSS class hover:bg-primary-98.', () => {
    render(
      <ButtonIconLogo />
    );
    const buttonElement = screen.getByTestId('button-logo-container');
    expect(buttonElement).toHaveClass('hover:bg-primary-98');
  });
})