import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

export default function App() {
const items = [ {title: "What is react?",
                content: "React is a frontend JS library. it is used to show content to users and handle user events. Engineers use React to create reusable components."},
                { title: "Why use React?",
                  content: "React is a popular JS library among engineers."},
                { title: "How do you use react?",
                  content: "You use React by creating component."}
                ];

  return(
    <div>
      <Search />
    </div>
  )
}

{/* <Accordion items={items} /> */}