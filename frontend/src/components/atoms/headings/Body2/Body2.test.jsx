import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Body2 from "./Body2";

describe('Body2', () => {

  test('should renders the Body2 component, the correct p html tag, and a text inside', () => {
    render(
      <Body2 weight='font-bold' isDarkTheme={false}>
        This is the Body2 bold component!
      </Body2>
    );
    // screen.debug();  
    const Body2Element = screen.getByTestId('body2-container');
    expect(Body2Element).toBeInTheDocument();
    expect(Body2Element.tagName).toBe('P');
    expect(Body2Element).toHaveTextContent(
      /This is the Body2 bold component!/i
    );
  });

  test('when weight prop is font-bold, should has the TailwindCSS font-bold class', () => {
    render(
      <Body2 weight='font-bold' isDarkTheme={false}>
        This is the Body2 bold component!
      </Body2>
    );
    const Body2Element = screen.getByTestId('body2-container');
    expect(Body2Element).toHaveClass('font-bold');
  });

  test('when isDarkTheme prop is false, should has the custom TailwindCSS text-secondary-15 class', () => {
    render(
      <Body2 weight='font-bold' isDarkTheme={false}>
        This is the Body2 bold component!
      </Body2>
    );
    const Body2Element = screen.getByTestId('body2-container');
    expect(Body2Element).toHaveClass('text-secondary-15');
  });
})