import {TODOLIST, TODOLIST2} from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

const SZULOELEM_SELECTOR = ".tarolo";

$(window).on("load", () => {
    const szuloElem = $(SZULOELEM_SELECTOR);

    new Megjelenit(TODOLIST, TODOLIST2, szuloElem);
});
