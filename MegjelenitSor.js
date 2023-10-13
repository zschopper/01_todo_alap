export default class MegjelenitSor {
    #adat
    #szuloElem
    #trElem
    #allapotElem
    #torolElem

    constructor(adat, szuloeleem) {
        this.#adat = adat;
        this.#szuloElem = szuloeleem;
        this.sor();

    }

    torol() {
        console.log('torol')
        $(this.#trElem).remove();
    }

    statuszValt() {
        console.log("statuszValt", this.#allapotElem)
        $(this.#allapotElem).parent().toggleClass('fuggoben').toggleClass('kesz');
    }

    sor() {
        let html = "";
        html += '<tr class="fuggoben">';
        html += `<td class="align-middle">${this.#adat.tevekenyseg}</td>`;
        html += `<td class="">${this.#adat.hatarido}</td>`;
        html += '<td class="allapot"></td><!-- ✓ -->';
        html += '<td class="torol">🗑</td>';
        html += '</tr>';
        this.#szuloElem.append(html);

        this.#allapotElem = $('.allapot:last')
        this.#allapotElem.on('click', () => {
            this.statuszValt();
        });

        this.#torolElem = $('.torol:last')
        this.#torolElem.on('click', () => {
            this.torol();
        });

        this.#trElem = this.#szuloElem.children('tr:last');

    }
}