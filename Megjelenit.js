export default class Megjelenit {

    constructor(todo1, todo2, szuloElem) {
        this.szuloElem = szuloElem;
        this.todo1 = todo1;
        this.todo2 = todo2;
        let html = this.osszeallit();
        szuloElem.html(html)
    }

    todo2_kikeres(todo1) {
        let i = 0;
        while (i <this.todo2.length) {
            if (this.todo2[i].tevekenyseg.includes(todo1)) {
                return this.todo2[i];
            }
            i++;
        }
        return undefined;
    }

    osszeallit() {
        let html = '<div class="table-responsive-lg"><table class="table"><thead><tr>';
        html += "</tr></thead><tbody>";

        for (const todo1 of this.todo1) {
            html += "<tr>";
            html += `<td class="align-middle">${todo1}</td>`;
            console.log(this.todo2[todo1]);
            let todo2 = this.todo2_kikeres(todo1)
            if (todo2 !== undefined) {
                html += `<td class="">${todo2.hatarido}</td>`;
            } else {
                html += "<td></td>"
            }
            html += "</tr>";
        };
        html += "</tbody></table></div>"
        return html;
    }
}

