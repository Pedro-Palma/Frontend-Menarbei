export class Work{
  constructor(
    public _id: String,
    public client: {
      _id: String,
      name: String,
    },
    public employee: {
      _id: String,
      name: String,
    },
    public typeEmployee: {
      _id: String,
      name: String,
    },
    public job: {
      _id: String,
      name: String,
    },
    public description: String,
    public price: Number,
    public status: String,
    public changes: String,
    public direction: String,
  ){}
}