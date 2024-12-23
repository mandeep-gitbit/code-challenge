# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
I managed to fetch the list of Pokémon by using the fetch API initially and then replaced it with axios for better handling of HTTP requests.<br>
Question 2: What steps would you take to future improve this?<br>
To further improve this, I would implement - 

1. **Error Handling**:
   Improve error handling to provide user-friendly messages.

2. **Loading State and Lazy Loading**:
   Add a loading state to indicate to the user that data is being fetched.

3. **TypeScript Types**:
   Will define TypeScript types for the API response to improve type safety.

4. **Custom Hook**:
   Create a custom hook for fetching data to make the component cleaner and more reusable.

5. **Environment Variables**:
   Store the API endpoint in environment variables for better configuration management.

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
In short createSlice helps us to simplify the process of creating reducers and actions.It combines the reducers, action types and action creators all together. In slice we can have respective reducers of individual functionality all together. For e.g. User CRUD operations we can combine in userSlice.

Question 5: Describe the benefits of immutable code.<br>
It simplifies the state management.<br>
It adds predictability.<br>
Saves us from unwanted bugs.<br>
Optimizes performance.<br>
Sequentially we can do the operations.<br>
commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?<br>
To verify that a action has been dispatched, we can use Reduc DevTools Extension or can use the console logs in handleRemove.


## Task 6:
Question 7: explain the use of `useEffect` hook in React<br>
The `useEffect` hook is one of the most important hooks in ReactJS. It operates during all three phases of a component's lifecycle: mounting, updating, and unmounting. The primary purpose of the `useEffect` hook is to handle side effects, such as data fetching and managing subscriptions, without causing blocking or delays in rendering. It effectively serves as the lifecycle methods for functional components. It also gives us the cleanup function that gets executed when component unmounts.<br>

Question 8: What is A High Order Component?<br>
A HOC is a component which takes a component as a prop or children and returns us the new component with additional functionality. With this also we can implement `inheritance`. It enhances the composability and keeps the separation of concerns.<br>

Question 9: What use cases would a HOC be usefull?
1) Code reuse
2) Logic abstraction
3) Inhance composability
4) Conditional rendering of a component<br>

Question 10: What does it indicate when a component is prefixed with `use` and `with`<br>
`use` indicates its a react hook. Example `useState`,`useEffect`,`useRef` etc. <br>
`with` indicates its a HOC. Example `withRouter`.<br>

Question 11: What is a Generic type in typescript?<br>
Generic type in TypeScript allows us to create reusable components and functions that can work with any data type while maintaining type safety.<br>

Question 12: Whats the difference between a controlled and uncontrolled input in React?<br>
*Controlled input* - The input value is controlled by react state internally. It is set by react and can be update via handlers.<br>
*Uncontrolled input* - The input value is managed by DOM ITSELF, We can use refs to access the value.