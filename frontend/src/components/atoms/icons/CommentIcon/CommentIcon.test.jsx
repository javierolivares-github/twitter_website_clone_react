import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CommentIcon from "./CommentIcon";

describe('CommentIcon', () => {
  test('Should renders the component.', () => {
    render(
      <CommentIcon size="24" fill="#172936" />
    );
    screen.debug();  
  });

  test('The component should render a svg element.', () => {
    render(
      <CommentIcon size="24" fill="#172936" />
    );
    const svgElement = screen.getByTestId('comment-container');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <CommentIcon size="24" fill="#172936" />
    );
    const svgElement = screen.getByTestId('comment-container');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #172936', () => {
    render(
      <CommentIcon size="24" fill="#172936" />
    );
    const pathElement = screen.getByTestId('comment-content');
    expect(pathElement).toHaveAttribute('fill', '#172936');
  });
});