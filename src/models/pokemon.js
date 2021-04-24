export default class Pokemon {
    constructor({ name, sprites, id }) {
        this.name = capitalizeFirstLetter(name)
        this.img = sprites.other["official-artwork"].front_default
        this.id = id
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
