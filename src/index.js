import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                avatar={faker.image.avatar()}
                author="Sam"
                timeAgo="Today at 4:45PM"
                commentText="Nice blog post!"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                avatar={faker.image.avatar()}
                author="Alex"
                timeAgo="Today at 4:50AM"
                commentText="Well done!"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                avatar={faker.image.avatar()}
                author="Jane"
                timeAgo="Yesterday at 6:55PM"
                commentText="So funny!"
            />
        </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
