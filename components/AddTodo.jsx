import { useRef } from "react";
import { Input, Button, HStack, useToast } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ addTodo }) => {
  const todoInputRef = useRef();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();

    const todoInput = todoInputRef.current.value;
    if (todoInput.length > 0) {
      const todo = {
        id: uuid(),
        name: todoInput,
      };

      addTodo(todo);
      todoInputRef.current.value = "";
      toast({
        title: "Success",
        description: "You created a new To Do!",
        duration: 3000,
        isClosable: true,
        status: "success",
        position: "top-right",
      });
    } else {
      toast({
        title: "Empty input",
        description: "Please fill the field with a valid To Do.",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        status: "warning",
      });
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="buy sugar free chocolate..."
          ref={todoInputRef}
        />
        <Button colorScheme="cyan" px="8" type="submit">
          Add To Do
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
