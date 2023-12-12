import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BookmarksIcon from "./BookmarksIcon";

describe('BookmarksIcon', () => {
  test('The component should render a svg element.', () => {
    render(
      <BookmarksIcon size="24" fill="#172936" isFilled={false}/>
    );
    // screen.debug();
    const svgElement = screen.getByTestId('bookmarks-outline');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <BookmarksIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('bookmarks-outline');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #000000', () => {
    render(
      <BookmarksIcon size="24" fill="#172936" isFilled={false}/>
    );
    const pathElement = screen.getByTestId('bookmarks-outline-content');
    expect(pathElement).toHaveAttribute('fill', '#172936');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <BookmarksIcon size="24" fill="#172936" isFilled={false}/>
    );
    const svgElement = screen.getByTestId('bookmarks-outline');
    expect(svgElement).toHaveAttribute('data-testid', 'bookmarks-outline');
  });

});