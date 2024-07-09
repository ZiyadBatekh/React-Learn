import React, { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a
        architecto ut ipsa totam, laborum provident laboriosam illo dolore saepe
        accusamus quod possimus, laudantium temporibus cumque excepturi nam
        voluptas facere reprehenderit! Nihil praesentium fuga voluptatum quod
        excepturi labore expedita inventore possimus, a in laudantium ut
        voluptate voluptatem quidem deserunt perferendis blanditiis? Ex
        temporibus, impedit suscipit ducimus delectus possimus rerum in tenetur
        porro ipsam nesciunt labore, eligendi sint at explicabo sapiente
        quisquam animi harum. Sit quos eaque quidem corrupti! Aliquid,
        distinctio optio mollitia provident fugit illo impedit laboriosam ullam
        commodi ea adipisci ab vitae corrupti quas quaerat autem nemo
        accusantium iusto.
      </ExpandableText>
    </div>
  );
}

export default App;
