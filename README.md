## Useful hooks while using redux 
1. useDispatch - it helps to dispatch the action 
2. useSelector - it helps to subscribe the state which is in store it will always updated when our state is updated.
 


## Steps which i did to get this output
   # Route Setup
1. install react-router -> npm i react-router-dom@6.0.2
2. import {BrowserRouter,Routes,Route} from 'react-router-dom'
3. In Route provide path and element(component)
4. setup Link with to keyword and provide path to be redirected.

## steps to use redux-tool-kit *RTK
1. createSlice.js - it is feture of redux-tool-kit it helps to store our data into small piece and easy to maintain.
2. import createSlice from redux-toolkit 
3. store createSlice into a variable and provide name and initial state .
4. create actions and reducers in the createSlice.
5. export actions and reducers
6. create store file and import configureStore and assingn a varible.
7. Register reducers in store file write key-> reducer and value obj and in the obj write name of reducer funtion.
8. wrap our app component with provider and pass store as a prop



NOTE:- In redux toolkit createSlice has feature to change real state directly instead of new one but in redux we are not changing the real state directly.