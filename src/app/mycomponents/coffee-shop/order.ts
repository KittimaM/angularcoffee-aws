export class Order {
  public name: string
  public email: string
  public phone: number
  public drink: string
  public tempPreference: string
  public sendText: boolean
  public date: Date
  public message:string

     constructor(
      name: string,
      email: string,
      phone: number,
      drink: string,
      tempPreference: string,
      sendText: boolean,
      date: Date,
      message: string

   ){
     this.name = name
     this.email = email
     this.phone = phone
     this.drink = drink
     this.tempPreference = tempPreference
     this.sendText = sendText
     this.date = new Date()
     this.message = message

   }
}
