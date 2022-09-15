import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log("Pathname:", router.pathname);
  console.log("QUERY:", router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "julio", clientprojectid: "projectA" },
    });
  };

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
