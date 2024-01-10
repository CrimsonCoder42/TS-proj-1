import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void,
}

export default class FullList implements List {
  constructor(public list: ListItem[] = []) {}

  load(): void {
    const list = localStorage.getItem('list');
    if (list) {
      this.list = JSON.parse(list);
    }
  }

  save(): void {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  clearList(): void {
    this.list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this.list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this.list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}