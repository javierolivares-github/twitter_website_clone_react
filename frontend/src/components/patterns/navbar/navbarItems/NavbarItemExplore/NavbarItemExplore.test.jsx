import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NavbarItemExplore from "./NavbarItemExplore";

describe('NavbarItemExplore', () => {
  test('The component should render a li element.', () => {
    render(
      <NavbarItemExplore isDarkTheme={true} isActive={false} />
    );
    // screen.debug();
    const liElement = screen.getByTestId('navbar-item-explore-container');
    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe('LI');
  });

  test('When isDarkTheme is true, the component should have the CSS class hover:bg-transparent-10, and the icon should have a color #FFFFFF ', () => {
    render(
      <NavbarItemExplore isDarkTheme={true} isActive={false} />
    );
    const liElement = screen.getByTestId('navbar-item-explore-container');
    const pathElement = screen.getByTestId('explore-outline-content');
    expect(liElement).toHaveClass('hover:bg-transparent-10');
    expect(pathElement).toHaveAttribute('fill', '#FFFFFF');
  });

  test('When isActive is true, the component should have the CSS class hover:bg-primary-90, and the font-weight of the text should be bold', () => {
    render(
      <NavbarItemExplore isDarkTheme={false} isActive={true} />
    );
    const liElement = screen.getByTestId('navbar-item-explore-container');
    const h2Element = screen.getByTestId('heading1-container');
    expect(liElement).toHaveClass('hover:bg-primary-90');
    expect(h2Element).toHaveClass('font-bold');
  });
})