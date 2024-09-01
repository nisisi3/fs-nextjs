import { NextResponse } from "next/server";

const posts = [
  {
    title: "Introduction to Python",
    slug: "introduction-to-python",
    content:
      "Python is a versatile programming language used for various applications...",
  },
  {
    title: "Understanding Data Analysis",
    slug: "understanding-data-analysis",
    content:
      "Data analysis involves inspecting, cleansing, and modeling data to discover useful information...",
  },
  {
    title: "Financial Forecasting Techniques",
    slug: "financial-forecasting-techniques",
    content:
      "Financial forecasting is the process of estimating future financial outcomes based on historical data...",
  },
  {
    title: "Web Development with FastAPI",
    slug: "web-development-with-fastapi",
    content:
      "FastAPI is a modern, fast web framework for building APIs with Python 3.6+...",
  },
  {
    title: "Machine Learning with Scikit-Learn",
    slug: "machine-learning-with-scikit-learn",
    content:
      "Scikit-Learn is a popular machine learning library in Python that provides simple and efficient tools for data mining and data analysis...",
  },
];
export async function GET() {
    return NextResponse.json(posts)
}