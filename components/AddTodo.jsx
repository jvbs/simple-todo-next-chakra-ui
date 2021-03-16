import { Input, Button, HStack } from "@chakra-ui/react";

const AddTodo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <HStack mt="8">
        <Input variant="filled" placeholder="buy sugar free chocolate..." />
        <Button colorScheme="cyan" px="8">
          Add To Do
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
