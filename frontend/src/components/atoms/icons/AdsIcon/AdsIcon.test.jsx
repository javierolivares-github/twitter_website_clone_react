import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AdsIcon from "./AdsIcon";

describe('AdsIcon', () => {

  test('Should renders the AdsIcon component.', () => {
    render(
      <AdsIcon size="24" fill="#9747FF"/>
    );
    screen.debug();  
  });

  test('The component should render a svg element.', () => {
    render(
      <AdsIcon size="24" fill="#9747FF"/>
    );

    const AdsIconElement = screen.getByTestId('adsIcon-container');
    expect(AdsIconElement).toBeInTheDocument();
    expect(AdsIconElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <AdsIcon size="24" fill="#9747FF"/>
    );

    const AdsIconElement = screen.getByTestId('adsIcon-container');
    expect(AdsIconElement).toHaveAttribute('width', '24');
    expect(AdsIconElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of #000000', () => {
    render(
      <AdsIcon size="24" fill="#000000"/>
    );

    const AdsIconContent = screen.getByTestId('adsIcon-content');
    expect(AdsIconContent).toHaveAttribute('fill', '#000000');
  });

})