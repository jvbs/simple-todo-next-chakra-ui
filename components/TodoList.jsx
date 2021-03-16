import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Stack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <Stack spacing={3}>
        <Alert status="success" w="100%">
          <AlertIcon />
          There's no To Do's available here.
        </Alert>
      </Stack>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.name}</Text>
          <Spacer />
          <IconButton
            onClick={() => {
              deleteTodo(todo.id);
            }}
            icon={<FaTrash />}
            isRound={true}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
