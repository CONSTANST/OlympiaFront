import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const EventToPublish = () => {
  const [file, setFile] = useState({});
  const [preview, setPreview] = useState("");
  const [date, setDate] = useState();
  const [name, setName] = useState("");
  const [orchestre, setOrchestre] = useState();
  const [mezzanine, setMezzanine] = useState();
  const [orchestrePrice, setOrchestrePrice] = useState();
  const [mezzaninePrice, setMezzaninePrice] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("event_image", file);
      formData.append("name", name);
      formData.append("date", date);
      formData.append("orchestre", orchestre);
      formData.append("mezzanine", mezzanine);
      formData.append("orchestrePrice", orchestrePrice);
      formData.append("mezzaninePrice", mezzaninePrice);
      console.log(formData);
      const response = await axios.post(
        `http://localhost:3000/events/create`,
        formData
        // {
        //   headers: {
        //     Authorization: "Bearer " + token,
        //     //send formData with axios make this headers EXPLICIT !
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      console.log(response.data);
      if (response.data.id) {
        navigate(`/event/${response.data.id}`);
      }
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Une erreur est survenue, veuillez réssayer"
      );
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="nombre de place de categorie orchestre"
          value={orchestre}
          onChange={(event) => {
            setOrchestre(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="prix de la place en orchestre"
          value={orchestrePrice}
          onChange={(event) => {
            setOrchestrePrice(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="nombre de place de categorie mezzanine"
          value={mezzanine}
          onChange={(event) => {
            setMezzanine(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="prix de la place en mezzanine"
          value={mezzaninePrice}
          onChange={(event) => {
            setMezzaninePrice(event.target.value);
          }}
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

        <button type="submit">Crée l'événement</button>
      </form>
    </div>
  );
};
export default EventToPublish;
