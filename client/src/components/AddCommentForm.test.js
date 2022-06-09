import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCommentForm from "./AddCommentForm";

describe("AddCommentForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<AddCommentForm onSubmit={func} />);
  });
  it("contains h2 heading", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("changes the input when author is changed", () => {
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    userEvent.type(inputAuthor, "Srdjan");
    expect(inputAuthor).toHaveValue("Srdjan");
  });
  it("changes the input when body is changed", () => {
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    userEvent.type(inputBody, "Comment");
    expect(inputBody).toHaveValue("Comment");
  });
  it("calls onSubmit when the Submit button is clicked", () => {
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls onSubmit with the newComment", () => {
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });

    userEvent.type(inputAuthor, "Srdjan");
    userEvent.type(inputBody, "Comment");

    const newComment = { author: inputAuthor.value, body: inputBody.value };

    const submitButton = screen.getByRole("button", { name: "Submit" });

    userEvent.click(submitButton);
    expect(func.mock.calls[0][0]).toEqual(newComment);
  });
});
