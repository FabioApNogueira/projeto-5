import { useRouter } from "next/router";
import { useDestino } from "@/hooks/useDestino";
import { useState } from "react";

const DeleteDestino = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const { deleteDestino } = useDestino();
  const [destinoId, setDestinoId] = useState(codigo);

  const handleDeleteDestino = () => {
    deleteDestino(destinoId);
  };

  return (
    <div>
      <h1>Deletar Destino</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID do Destino a ser deletado:</label>
            </td>
            <td>
              <input
                readOnly
                type="text"
                value={destinoId}
                onChange={(e) => setDestinoId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteDestino}>Deletar Destino</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDestino;
