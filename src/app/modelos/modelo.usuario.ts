export class Usuario{
    constructor(
      public _id: String,
      public name: String,
      public lastName: String,
      public user: String,
      public password: String,
      public email: String,
      public phone: Number,
      public direction: String,
      public role: Number,
      public typeEmployee: {
        _id:String,
        name:String,
      },
      public rewiews:[{
       _id:String,
       coment:String,
       idUserComent:String

      }],
    ){}
  }
  