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
  const [file, setFile] = useState({});
  const [preview, setPreview] = useState("");

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
      event_image: file,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/event/modify/${params.id}`,
        eventModified
      );
      console.log(response);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <p>Modifier l'evenement {}</p>
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="nombre de place de categorie orchestre"
          value={orchestre}
          onChange={(event) => setOrchestre(event.target.value)}
        />
        <input
          type="number"
          placeholder="prix de la place en orchestre"
          value={orchestrePrice}
          onChange={(event) => setOrchestrePrice(event.target.value)}
        />
        <input
          type="number"
          placeholder="nombre de place de categorie mezzanine"
          value={mezzanine}
          onChange={(event) => setMezzanine(event.target.value)}
        />
        <input
          type="number"
          placeholder="prix de la place en mezzanine"
          value={mezzaninePrice}
          onChange={(event) => setMezzaninePrice(event.target.value)}
        />
        <input
          type="file"
          id="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
            setPreview(URL.createObjectURL(event.target.files[0]));
          }}
        />
        {preview ? (
          <div className="preview-image">
            <img src={preview} alt="pré-visualisation" />
            <div
              className="remove-img-button"
              onClick={() => {
                setPreview("");
              }}
            >
              X
            </div>
          </div>
        ) : (
          <div className="preview-without">
            <div className="input-design-default">
              <label htmlFor="file" className="label-file">
                <span className="input-sign">+</span>
                <span>Ajoute une photo</span>
              </label>
            </div>
          </div>
        )}

        <button type="submit">Sauver les changements</button>
      </form>
    </div>
  );
};
export default ModifyEvent;
