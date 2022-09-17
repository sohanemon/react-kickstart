import { Card, Button } from "react-daisyui";

const Cards = (args) => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {data.map((e) => (
        <Card id={e} {...args}>
          <Card.Image
            className='w-full'
            src='https://wallpaperaccess.com/full/450379.jpg'
            alt='Shoes'
          />
          <Card.Body>
            <Card.Title tag='h2'>Ride the ghost</Card.Title>
            <p>Let you ride over a ghost</p>
            <Card.Actions className='justify-end'>
              <Button color='primary'>Ride now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
const data = [1, 2, 3, 4, 5];
export default Cards;
