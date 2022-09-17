import { Button, Pagination } from "react-daisyui";

const Paging = (args) => {
  return (
    <>
      <Pagination {...args}>
        <Button>1</Button>
        <Button active>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Pagination>
    </>
  );
};

export default Paging;
