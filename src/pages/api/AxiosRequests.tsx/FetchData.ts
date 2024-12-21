import axios from "axios";
import { Recipe } from "../Interfaces/MainInter";

export default async function FetchRecepies() {
    const res = await axios.get<Recipe[]>("https://dummyapi.online/api/recipes");
    return res.data
}