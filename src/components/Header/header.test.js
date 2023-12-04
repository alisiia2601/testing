import MovieHeader from ".";
import { render, screen } from "@testing-library/react";

test("There's an H1 tag rendered in the MovieHeader component with content", () => {
  render(<MovieHeader title="Movie Way" subTitle="Explore the Cinematic Universe" />);

  const pageTitle = screen.getByRole("heading", { level: 1 });
  const pageSubTitle = screen.getByRole("heading", { level: 2 });

  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle).toHaveTextContent(/movie way/i);
  expect(pageSubTitle).toBeInTheDocument();
  expect(pageSubTitle).toHaveTextContent(/explore the cinematic universe/i);
});
