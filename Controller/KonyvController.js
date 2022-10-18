import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);
    }

    konyvAdatok(tomb) {
        //console.log(tomb);
        let szuloelem = $("main")
        new KonyvekView(tomb, szuloelem)
    }
}

export default KonyvController;