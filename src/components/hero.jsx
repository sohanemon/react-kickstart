import { Hero, Button } from "react-daisyui";
const Main = (args) => {
  return (
    <>
      <Hero
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/8085129.jpg)",
          height: "100vh",
        }}
      >
        <Hero.Overlay {...args} />
        <Hero.Content className='text-center'>
          <div className='max-w-md text-white'>
            <h1 className='text-5xl font-bold'>Hey Broos</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Button color='primary'>Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
    </>
  );
};

export default Main;
