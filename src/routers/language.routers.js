import { Router } from "express";
import { methods as languageControllers} from "../controllers/language.controller";

const router = Router();

router.get("/", languageControllers.getLanguages); //all languages
router.get("/:id", languageControllers.getLanguage); //get language by id
router.post("/", languageControllers.addLanguage); //add new language
router.delete("/:id", languageControllers.deleteLanguage); //delete language by id


export default router;