import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const getModeHandler = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.BACKEND_LOCATION}pie/getMode`);
    if (response.status === 200) {
      res.status(200).json(response.data); 
    } else {
      console.error("Något gick snett!", response.data.message);
      res.status(response.status).json({ message: "Fel vid hämtning av läge" });
    }
  } catch (error) {
    console.error("Ett fel uppstod:", error.message);
    res.status(500).json({ message: "Serverfel", error: error.message });
  }
};

export default getModeHandler;


