import Link from "next/link";

const Clients = () => {
  const clients = [
    { id: "1", name: "Julio" },
    { id: "2", name: "Antonio" },
  ];

  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
