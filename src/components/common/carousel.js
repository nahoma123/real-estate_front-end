import { jsx as _jsx } from "react/jsx-runtime";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const ImageCarousel = ({ images }) => {
    return (_jsx(Carousel, { children: images?.map((image, index) => (_jsx("div", { children: _jsx("img", { src: image, alt: `Image ${index}` }) }, index))) }));
};
