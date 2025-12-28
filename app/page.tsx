import Link from "next/link";

const Home = () => {
  console.log("page rendered");
  return (
    <div>
      Home Page
      <br />
      <Link href="/second">Go to Second Page</Link>
    </div>
  );
};

export default Home;
