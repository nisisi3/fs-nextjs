import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  return (
    <main>
      <h1>Im About bro</h1>
      <p>We are the social media company</p>
    </main>
  );
}
