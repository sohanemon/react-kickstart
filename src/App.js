import Cards from "./components/cards";
import CarouselComp from "./components/carousel-comp";
import MyFooter from "./components/footer";
import Header from "./components/header";
import Main from "./components/hero";
import Stats from "./components/stats";
import Paging from "./components/pagination";

function App() {
  return (
    <div className='space-y-16'>
      <div className='h-screen'>
        <Header /> <CarouselComp width='full' display='sequential' />
      </div>
      <Main />
      <div className='flex flex-col items-center mx-auto w-5/6 my-20'>
        <h1 className='pb-14 text-2xl md:text-3xl text-center font-semibold'>
          {" "}
          Our Latest Ghosts
        </h1>
        <Cards />
        <br />
        <Paging />
      </div>{" "}
      <div className='my-20 grid place-content-center'>
        <Stats />
      </div>{" "}
      <MyFooter />
    </div>
  );
}

export default App;
