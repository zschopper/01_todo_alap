import MegjelenitSor from "./MegjelenitSor.js";
export default class Megjelenit {

    constructor(todo, szuloElem) {
        this.szuloElem = szuloElem;
        this.todo = todo;
        szuloElem.append('<table class="table table-bordered table-dark"><thead></thead><tbody></tbody></table>');
        this.tbodyElem = szuloElem.children('table').children('tbody');
        this.tablazatbaIr();
    }

    tablazatbaIr() {
        for (const todo of this.todo) {
            new MegjelenitSor(todo, this.tbodyElem)
        };
    }
}

