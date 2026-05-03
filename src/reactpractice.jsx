//// render large list virtualization 

import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

export default function App() {
  return (
    <List
      height={400}
      itemCount={10000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}

////// debouncing

function debouncefn(fn,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer= setTimeout(()=>{
      fn.apply(this,args);
    },delay)
  }
}

let x=debouncefn(()=> console.log("111"),500);
x();



////You need a layout: sticky header, sidebar (collapsible), main content area, and footer that hugs the bottom on short pages. CSS Grid only. Code it out verbally.