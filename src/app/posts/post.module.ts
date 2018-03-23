export class Post {
  public ownerId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(ownerId: number, id: number, title: string, body: string){
    this.ownerId = ownerId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

