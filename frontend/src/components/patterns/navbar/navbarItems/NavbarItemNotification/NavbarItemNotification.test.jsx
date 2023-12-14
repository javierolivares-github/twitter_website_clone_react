import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NavbarItemNotification from "./NavbarItemNotification";

describe('NavbarItemNotification', () => {
  test('The component should render a li element.', () => {
    render(
      <NavbarItemNotification isDarkTheme={true} isHomeActive={false} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-notification-container');
    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe('LI');
  });

  test('When isDarkTheme is true, the component should have the CSS class hover:bg-transparent-10, and the icon should have a color #FFFFFF ', () => {
    render(
      <NavbarItemNotification isDarkTheme={true} isHomeActive={false} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-notification-container');
    const pathElement = screen.getByTestId('notification-outline-content');
    expect(liElement).toHaveClass('hover:bg-transparent-10');
    expect(pathElement).toHaveAttribute('fill', '#FFFFFF');
  });

  test('When isHomeActive is true, the component should have the CSS class hover:bg-primary-90, and the font-weight of the text should be bold', () => {
    render(
      <NavbarItemNotification isDarkTheme={false} isHomeActive={true} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-notification-container');
    const h2Element = screen.getByTestId('heading1-container');
    expect(liElement).toHaveClass('hover:bg-primary-90');
    expect(h2Element).toHaveClass('font-bold');
  });
})