import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TweetButton from "./TweetButton";

describe('TweetButton', () => {
  test('The component should render a button element.', () => {
    render(
      <TweetButton isDarkTheme={false} size="large">
        Tweet
      </TweetButton>
    );
    // screen.debug();
    const buttonElement = screen.getByTestId('tweet-button-container');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  test('When the isDarkTheme is true, the component should contain the CSS class bg-transparent-10.', () => {
    render(
      <TweetButton isDarkTheme={true} size="large">
        Tweet
      </TweetButton>
    );
    const buttonElement = screen.getByTestId('tweet-button-container');
    expect(buttonElement).toHaveClass('bg-transparent-10 hover:bg-transparent-25');
  });

  test('When the size is large, the component should contain the CSS text-[20px]class', () => {
    render(
      <TweetButton isDarkTheme={true} size="large">
        Tweet
      </TweetButton>
    );
    // screen.debug();
    const spanElement = screen.getByTestId('tweet-button-content');
    expect(spanElement).toHaveClass('text-[20px]');
  });

  test("Should calls a callback function when the button is pressed", () => {
    const handleClick = vi.fn();
    render(
      <TweetButton isDarkTheme={true} size="large" onClick={handleClick}>
        Tweet
      </TweetButton>
    );
    const buttonElement = screen.getByTestId('tweet-button-container');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });
})