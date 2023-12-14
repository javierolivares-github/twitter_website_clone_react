import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NavbarItemMore from "./NavbarItemMore";

describe('NavbarItemMore', () => {
  test('The component should render a li element.', () => {
    render(
      <NavbarItemMore isDarkTheme={true} isHomeActive={false} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-more-container');
    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe('LI');
  });

  test('When isHomeActive is true, the component should have the CSS class hover:bg-primary-90, and the font-weight of the text should be bold', () => {
    render(
      <NavbarItemMore isDarkTheme={false} isHomeActive={true} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-more-container');
    const h2Element = screen.getByTestId('heading1-container');
    expect(liElement).toHaveClass('hover:bg-primary-90');
    expect(h2Element).toHaveClass('font-bold');
  });
})