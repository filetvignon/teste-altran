class List {
  constructor() {
    this.list = [];
    this.ids = new Set();
  }

  get size() {
    return this.ids.size;
  }

  clear() {
    this.list.length = 0;
    this.ids.clear();
  }

  add(item, idProp = "id") {
    if (!item[idProp]) return;
    if (this.ids.has(item[idProp])) return;
    this.list.push(item);
    this.ids.add(item[idProp]);
  }

  show(field, dir = "DESC") {
    if (!field) return;
    if (this.list.length === 0) return this.list;
    return this.list.sort((a, b) => {
      const lengthA = a[field].length;
      const lengthB = b[field].length;
      if (dir === "DESC") return lengthB - lengthA;
      return lengthA - lengthB;
    });
  }
}

module.exports = List;
