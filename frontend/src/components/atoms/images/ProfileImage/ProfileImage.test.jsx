import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ProfileImage from "./ProfileImage";

describe('ProfileImage', () => {
  test('The component should render a img element.', () => {
    render(
      <ProfileImage 
        imageUrl="../../../../../public/assets/profile3.png" 
      />
    );
    screen.debug();
    const imgElement = screen.getByTestId('profile-img-container');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe('IMG');
  });

})