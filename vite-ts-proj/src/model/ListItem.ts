export interface Item {
  id: string,
  item: string,
  checked: boolean
}

export default class ListItem implements Item {
  constructor(
    public _id: string = '',
    public _item: string = '',
    public _checked: boolean = false,
  ) {}
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get item(): string {
    return this._item;
  }

  set item(value: string) {
    this._item = value;
  }

   get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }

}
  


// challenge 

// create class refer to getters and setters