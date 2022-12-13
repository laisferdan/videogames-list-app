export default class Videogame {
  static lastId: number = 4;

  id: number;
  title: string;
  summary?: string;
  score?: number;
  releaseDate: Date;
  alreadyFinished: boolean;

  constructor(title: string, summary?: string, score?: number, releaseDate: Date = new Date(), alreadyFinished: boolean = false) {
    this.title = title;
    this.summary = summary;
    this.score = score;
    this.releaseDate = releaseDate;
    this.alreadyFinished = alreadyFinished;
  
    this.id = Videogame.updateLastId();
  }
  
  static updateLastId(id?: number): number {
    return ++this.lastId;
  }
}