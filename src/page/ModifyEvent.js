import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const ModifyEvent = () => {
  const params = useParams();
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const [orchestre, setOrchestre] = useState();
  const [mezzanine, setMezzanine] = useState();
  const [orchestrePrice, setOrchestrePrice] = useState();
  const [mezzaninePrice, setMezzaninePrice] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventModified = {
      date,
      name,
      seats: [
        {
          orchestre,
          mezzanine,
        },
      ],
      orchestrePrice,
      mezzaninePrice,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/event/modify/${params.id}`,
        eventModified
      );
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          value={orchestre}
          onChange={(event) => setOrchestre(event.target.value)}
        />
        <input
          type="number"
          value={orchestrePrice}
          onChange={(event) => setOrchestrePrice(event.target.value)}
        />
        <input
          type="number"
          value={mezzanine}
          onChange={(event) => setMezzanine(event.target.value)}
        />
        <input
          type="number"
          value={mezzaninePrice}
          onChange={(event) => setMezzaninePrice(event.target.value)}
        />
        <button type="submit">Sauver les changements</button>
      </form>
    </div>
  );
};
export default ModifyEvent;
