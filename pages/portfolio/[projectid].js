import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log("Pathname:", router.pathname);
  console.log("QUERY:", router.query);

  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
}

export default PortfolioProjectPage;