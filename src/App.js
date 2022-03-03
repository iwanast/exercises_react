import React, {useState} from "react";
import {Accordion, Search, Dropdown} from "./components";

export default function App() {
  const items = [ {title: "What is react?",
                content: "React is a frontend JS library. it is used to show content to users and handle user events. Engineers use React to create reusable components."},
                { title: "Why use React?",
                  content: "React is a popular JS library among engineers."},
                { title: "How do you use react?",
                  content: "You use React by creating component."}
                ];

  const options = [
    {
      label: "The color Red",
      value: "red"
    },
    {
      label: "The color Green",
      value: "green"
    },
    {
      label: "A shade of Blue",
      value: "blue"
    }
  ];

  const [selected, setSelected] = useState(options[0])

  return(
    <div>
      <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected} 
      />
    </div>
  )
}

{/* 
  <Accordion items={items} /> 
  <Search />
*/}