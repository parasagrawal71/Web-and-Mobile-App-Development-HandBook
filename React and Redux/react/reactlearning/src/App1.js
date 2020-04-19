import React, { useState } from "react";
import "./App.css";
// import { selectSong } from "./actions"; // This is named import
// import SongList from "./components/SongList";
// import SongDetail from "./components/SongDetail";
import PostList from "./components/PostList";

// ------------------------------------------------------------------------------------------------------------------------------------

// const App1 = () => {
//   // return <div>Redux integrated in React Application</div>;
//   // return <div>{console.log(selectSong("mySong"))}</div>;
//   return (
//     <div>
//       <SongList />
//       <SongDetail />
//     </div>
//   );
// };

// ------------------------------------------------------------------------------------------------------------------------------------

const App1 = () => {
  // Mutation in JavaScript
  const [str, setStr] = useState('');
  const [num, setNum] = useState(0);
  const [arr, setArr] = useState([1]);
  const [obj, setObj] = useState({name : 'Paras'});
  
  const person = {
    name: 'John Doe',
    email: 'john@doe.com',
    age: 27,
    country: 'Australia',
    profession: 'Front End Developer'
  };
  const { profession, country, ...newPerson } = person;
  console.log(newPerson);
  
  // React-thunk
  return (
    <div>
      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setStr('Hey String Here')}} /> <br />
      {str ? str : 'Nothing'} */}

      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setNum('Hey Number Here')}} /> <br />
      {num ? num : 'Nothing'} */}

      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setArr(arr.concat(2))}} /> <br />
      {console.log(arr)}
      {arr.length > 0 ? arr : 'Nothing'} */}

      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setObj(Object.assign({}, obj, {id : 1}))}} /> <br /> */}
      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setObj(Object.assign({}, obj, {name : 'Ram'}))}} /> <br /> */}
      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setObj(Object.assign({}, {name : 'Sam'}, null))}} /> <br /> */}
      {/* <input type="submit" value="Click Me to re-render" onClick={() => {setObj(Object.assign({}, null, {id : 1}))}} /> <br /> */}
      {/* {console.log(obj)} <br /> */}
      {/* {obj.length} -> undefined <br /> */}
      {/* {Object.keys(obj).length} -> number <br /> */}
      {/* {Object.keys(obj).length > 0 ? obj : 'Nothing'} -> ERROR <br /> */}
      {/* {Object.keys(obj).length > 0 ? obj.id : 'Nothing'} <br /> */}
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------

// const App1 = () => {
//   return (
//     <div>
//       <PostList />
//     </div>
//   );
// };

// ------------------------------------------------------------------------------------------------------------------------------------

export default App1;
