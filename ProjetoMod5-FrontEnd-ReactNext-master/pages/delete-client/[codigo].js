import { useRouter } from "next/router";
import { useCliente } from "@/hooks/useCliente";
import { useState } from "react";

const DeleteClient = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const { deleteCliente } = useCliente();
  const [clientId, setClientId] = useState(codigo);

  const handleDeleteCliente = () => {
    deleteCliente(clientId);
  };

  return (
    <div>
      <h1>Deletar Cliente</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID do Cliente a ser deletado:</label>
            </td>
            <td>
              <input
                readOnly
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteCliente}>Deletar Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteClient;
