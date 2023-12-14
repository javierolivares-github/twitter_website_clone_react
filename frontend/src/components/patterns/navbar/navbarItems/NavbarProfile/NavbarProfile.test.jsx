import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import NavbarProfile from "./NavbarProfile";

describe('NavbarProfile', () => {
  test('The component should render a div element.', () => {
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={false}
      />
    );
    const divElement = screen.getByTestId('navbar-profile-container');
    expect(divElement).toBeInTheDocument();
    expect(divElement.tagName).toBe('DIV');
  });

  test('The src attribute should contain the path to the image.', () => {
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={false}
      />
    );
    const imgElement = screen.getByTestId('profile-img-container');
    expect(imgElement).toHaveAttribute('src', '../../../../../assets/profile2.png');
  });

  test('The heading element should contain the username.', () => {
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={false}
      />
    );
    const h3Element = screen.getByTestId('heading2-container');
    expect(h3Element).toHaveTextContent('Jane Doe');
  });

  test('The p element should contain the account.', () => {
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={false}
      />
    );
    const pElement = screen.getByTestId('body2-container');
    expect(pElement).toHaveTextContent('@janedoe32');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class bg-transparent-10.', () => {
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={true}
      />
    );
    const divElement = screen.getByTestId('navbar-profile-container');
    expect(divElement).toHaveClass('hover:bg-transparent-10');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <NavbarProfile
        imageUrl="../../../../../assets/profile2.png"
        username="Jane Doe"
        account="@janedoe32"
        isDarkTheme={true}
        onClick={handleClick}
      />
    );
    const divElement = screen.getByTestId('navbar-profile-container');
    fireEvent.click(divElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})