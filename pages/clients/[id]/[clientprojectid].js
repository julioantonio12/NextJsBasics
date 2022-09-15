import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();
  console.log("Pathname:", router.pathname);
  console.log("QUERY:", router.query);

  return (
    <div>
      <h1>The project page for a specific project for a selected client</h1>
    </div>
  );
};

export default SelectedClientProject;
