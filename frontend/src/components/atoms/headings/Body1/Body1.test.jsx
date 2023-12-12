import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Body1 from "./Body1";

describe('Body1', () => {

  test('should renders the Body1 component, the correct p html tag, and a text inside', () => {
    render(
      <Body1 weight='font-bold' isDarkTheme={false}>
        This is the Body1 bold component!
      </Body1>
    );
    // screen.debug();  
    const Body1Element = screen.getByTestId('body1-container');
    expect(Body1Element).toBeInTheDocument();
    expect(Body1Element.tagName).toBe('P');
    expect(Body1Element).toHaveTextContent(
      /This is the Body1 bold component!/i
    );
  });

  test('when weight prop is font-bold, should has the TailwindCSS font-bold class', () => {
    render(
      <Body1 weight='font-bold' isDarkTheme={false}>
        This is the Body1 bold component!
      </Body1>
    );
    const Body1Element = screen.getByTestId('body1-container');
    expect(Body1Element).toHaveClass('font-bold');
  });

  test('when isDarkTheme prop is false, should has the custom TailwindCSS text-secondary-15 class', () => {
    render(
      <Body1 weight='font-bold' isDarkTheme={false}>
        This is the Body1 bold component!
      </Body1>
    );
    const Body1Element = screen.getByTestId('body1-container');
    expect(Body1Element).toHaveClass('text-secondary-15');
  });
})