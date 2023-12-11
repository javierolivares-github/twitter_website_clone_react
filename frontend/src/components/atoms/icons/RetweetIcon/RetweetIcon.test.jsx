import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import RetweetIcon from "./RetweetIcon";

describe('RetweetIcon', () => {
  test('Should renders the component.', () => {
    render(
      <RetweetIcon size="24" fill="#172936" isFilled={false}/>
    );
    screen.debug();  
  });

  test('The component should render a svg element.', () => {
    render(
      <RetweetIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('retweet-outline-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <RetweetIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('retweet-outline-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #000000', () => {
    render(
      <RetweetIcon size="24" fill="#172936" isFilled={false}/>
    );
    const pathElement = screen.getByTestId('retweet-outline-content');
    expect(pathElement).toHaveAttribute('fill', '#172936');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <RetweetIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('retweet-outline-container');
    expect(svgElement).toHaveAttribute('data-testid', 'retweet-outline-container');
  });

});