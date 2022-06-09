import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentThread from "./CommentThread";

describe("CommentThread", () => {
  const comment = {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
  let func;
  let link;
  beforeEach(() => {
    func = jest.fn();
    render(<CommentThread comment={comment} onMoreReplies={func} />);
    link = screen.getByRole("link", { name: /Show More Replies/ });
  });
  it("contains show more replies link", () => {
    expect(link).toBeInTheDocument();
  });
  it("calls onMoreReplies when link is clicked", () => {
    userEvent.click(link);
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls onMoreReplies with commentId passed in", () => {
    userEvent.click(link);
    expect(func.mock.calls[0][0]).toBe(comment.id);
  });
});

// func.mock.calls    [[commentId]]
