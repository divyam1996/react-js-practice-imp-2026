import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import SearchComponent from "./SearchComponent";
import AutoSuggest from "./AutoSuggest";
import DataComponent from "./DataComponent";
import data from "./data.json"
import FileFolderStructure from "./FileFolderStructure";
import Accordion from "./Accordion";
import ChipsInput from "./ChipsInput";
import ProgressBar from "./ProgressBar";
import OtpInput from "./OtpInput";
import NestedCheckbox from "./NestedCheckBoxes";
import InfiniteScroll from "./components/InfiniteScroll";
import Draggable from "./components/Draggable";
import Quiz from "./components/Quiz";
import MovieBooking from "./components/MovieBooking";
import TicTacToe from "./components/TicTacToe";
import PaginationNumbers from "./components/Pagination";
import DataTable from "./components/Datatable";
import ChatList from "./components/CommonChatList";
import Todo from "./components/Todo";
import FormComponent from "./components/FormComponent";
import { FormProvider } from "./context/FormContext";


const tableColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "age", label: "Age" },
];

const tableData = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 30 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 24 },
  { id: 3, name: "Carol", email: "carol@example.com", age: 28 },
  { id: 4, name: "Dave", email: "dave@example.com", age: 35 },
  { id: 5, name: "Eve", email: "eve@example.com", age: 22 },
];

// Dummy components
const Home = () => <h2>Home Page</h2>;
const Search = () => <SearchComponent />;
const Suggest = () => <AutoSuggest />;

const App = () => {
  const [expandedTab, setExpandedTab] = useState(0);
  const [showText, setShowText] = useState([false, false, false]);
  const [fileData,setFileData] = useState(data);
  console.log("app rendered");

  useEffect(() => {
    const interval = setInterval(() => {
      if (expandedTab < 3) {
        setExpandedTab((prev) => prev + 1);

        setTimeout(() => {
          setShowText((prev) => {
            const newState = [...prev];
            newState[expandedTab] = true;
            return newState;
          });
        }, 300);
      }
    }, 1300);

    return () => clearInterval(interval);
  }, [expandedTab]);

  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/search"> Search</Link> | 
        <Link to="/suggest"> AutoSuggest</Link> |
        <Link to="/data"> Data</Link> |
        <Link to="/file"> FileFolder</Link> | 
        <Link to ="/accordion">Accordion</Link> |
        <Link to ="/chips">Chips Input</Link> |
        <Link to ="/progress">Progress Bar</Link> |
        <Link to ="/otp">OTP Input</Link> |
        <Link to ="/nestedcheckbox">Nested Checkbox</Link> |
        <Link to ="/infinitescroll">Infinite Scroll</Link> | 
        <Link to ="/draggable">Draggable</Link> |
        <Link to ="/quiz">Quiz</Link> |
        <Link to ="/movie">Movie Booking</Link> | 
        <Link to ="/tictac">Tic Tac Toe</Link> |
        <Link to ="/pagination">Pagination</Link> |
        <Link to ="/datatable">DataTable</Link> | 
        <Link to ="/chatList">Chat List</Link> |
        <Link to ="/todo">Todo</Link> |
        <Link to ="/formcomp">Form Component</Link> 
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="tabs-container">
              {/* Tab 1 */}
              <div className={`tab ${expandedTab >= 1 ? "expanded" : ""}`}>
                <p className={`tab-text ${showText[0] ? "visible" : ""}`}>
                  Tab 1 Content
                </p>
                 {expandedTab >= 1 && <div className="line-animation"></div>}
              </div>

              {/* Tab 2 */}
              <div className={`tab ${expandedTab >= 2 ? "expanded" : ""}`}>
                <p className={`tab-text ${showText[1] ? "visible" : ""}`}>
                  Tab 2 Content
                </p>
                 {expandedTab >= 2 && <div className="line-animation"></div>}
              </div>

              {/* Tab 3 */}
              <div className={`tab ${expandedTab >= 3 ? "expanded" : ""}`}>
                <p className={`tab-text ${showText[2] ? "visible" : ""}`}>
                  Tab 3 Content
                </p>
                 {expandedTab >= 3 && <div className="line-animation"></div>}
              </div>
            </div>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/data" element={<DataComponent />} />
        <Route path="/file" element={<FileFolderStructure fileData={fileData} setFileData={setFileData}/>} />
         <Route path="/accordion" element={<Accordion />} />
         <Route path="/chips" element={<ChipsInput />} />
         <Route path="/progress" element={<ProgressBar />} />
          <Route path="/otp" element={<OtpInput/>} />
          <Route path="/nestedcheckbox" element={<NestedCheckbox/>} />
          <Route path="/infinitescroll" element={<InfiniteScroll/>} />
          <Route path="/draggable" element={<Draggable/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/movie" element={<MovieBooking/>} />
          <Route path="/tictac" element={<TicTacToe/>} />
          <Route path="/pagination" element={<PaginationNumbers/>} />
          <Route
            path="/datatable"
            element={<DataTable columns={tableColumns} data={tableData} />}
          />
          <Route
            path="/chatList"
            element={<ChatList />}
          />
          <Route
            path="/todo"
            element={<Todo />}
          />
          <Route
            path="/formcomp"
            element={
            <FormProvider>
            <FormComponent />
            </FormProvider>}
          
          />
      </Routes>
    </div>
  );
};

export default App;