import { Carousel } from "react-daisyui";
const CarouselComp = (args) => {
  return (
    <>
      <Carousel {...args} className=' h-full'>
        {data.map((i) => (
          <Carousel.Item
            className='min-h-full object-cover'
            src={i.src}
            alt={i.alt}
          />
        ))}
      </Carousel>
    </>
  );
};

const data = [
  {
    src: "https://wallpaperaccess.com/full/3949076.jpg",
    alt: "Car",
  },

  {
    src: "https://wallpaperaccess.com/full/3949079.png",
    alt: "Car",
  },
  {
    src: "https://wallpaperaccess.com/full/3949082.png",
    alt: "Car",
  },
  {
    src: "https://wallpaperaccess.com/full/3909258.jpg",
    alt: "Car",
  },
];

export default CarouselComp;
