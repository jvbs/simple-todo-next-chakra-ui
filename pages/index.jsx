import { useState } from "react";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

import data from "../data";

export default function Home() {
  const [todos, settodos] = useState(data);
  return (
    <>
      <VStack p={4}>
        <IconButton
          icon={<FaSun />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
        ></IconButton>
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, blue.500, cyan.300, teal.500)"
          bgClip="text"
        >
          A Simple ToDo App
        </Heading>
        <TodoList todos={todos} />
        <AddTodo />
      </VStack>
    </>
  );
}
