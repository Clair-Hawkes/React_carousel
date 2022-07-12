import { render, fireEvent } from "@testing-library/react";
import Card from './Card';
import TEST_IMAGES from "./_testCommon.js";

const TEST_IMAGE = TEST_IMAGES[0];


it("renders without crashing", function () {
  render(
    <Card
      caption={TEST_IMAGE.caption}
      src={TEST_IMAGE.src}
      currNum={1}
      totalNum={1}
    />
  );
});

// it("works when you click on the right arrow", function() {
//   const { container } = render(
//     <Carousel
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );
//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();

//   // move forward in the carousel
//   const rightArrow = container.querySelector(".bi-arrow-right-circle");
//   fireEvent.click(rightArrow);

//   // expect the second image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).toBeInTheDocument();
// });

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={TEST_IMAGE.caption}
      src={TEST_IMAGE.src}
      currNum={1}
      totalNum={1}
    />
  );
  expect(container).toMatchSnapshot();
});
