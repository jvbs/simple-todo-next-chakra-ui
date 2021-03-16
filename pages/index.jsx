import Head from "next/head";
import { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

// import initialTodos from "../data";

export default function Home(props) {
  //* Because of lifecycle hooks, while the component is being rendered
  //* you need to declare the state as empty, and after that, useEffect
  //* to get the value of localStorage, and you need to call window because
  //* Next.js overrides it everywhere excepts on componentDidMount() hook.

  //? https://stackoverflow.com/a/59540455/6580518
  //? https://stackoverflow.com/a/55151122/6580518

  const [todos, setTodos] = useState([]);

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));

    setTodos(localTodos);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const currentTodos = [...todos, todo];

    setTodos(currentTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <Head>
        <title>A Simple ToDo App</title>
      </Head>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
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
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </>
  );
}
