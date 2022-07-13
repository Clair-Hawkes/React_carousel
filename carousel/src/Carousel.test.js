import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//TODO: Change common strings to global constants

it("renders without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="Test Title" />);
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//******************************** LEFT ARROW  *********/
it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // ****move backward in the carousel****
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
});

// Tests x2

// Test 1: that the left arrow is missing when you’re on the first image,
// Use the toBeInTheDocument for the right arrow
// Use the not.toBeInTheDocument for the left arrow

//******************************** LEFT ARROW DOESN'T SHOW  *********/
it("does not show the left arrow when you’re on the first image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // expect that the left arrow is missing when you’re on the first image.
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();

  // expect that the right arrow shows when you’re on the first image.
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).toBeInTheDocument();
});

// Test 2: that the right arrow is missing when you’re on the last image.
// Use the toBeInTheDocument for the left arrow
// Use the not.toBeInTheDocument for the right arrow

//******************************** RIGHT ARROW DOESN'T SHOW  *********/
it("does not show the right arrow when you’re on the last image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel to img 2
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move forward in the carousel to img 3
  fireEvent.click(rightArrow);

  // expect the third image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // expect that the right arrow is missing when you’re on the first image.
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).not.toBeInTheDocument();

  // expect that the left arrow shows when you’re on the first image.
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).toBeInTheDocument();
});


it("matches snapshot", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Title"
    />
  );
  expect(container).toMatchSnapshot();
});
