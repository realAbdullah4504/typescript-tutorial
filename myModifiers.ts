class User {
  public email: string;
  protected _courseCount: number; //protected can be used in the inherited class but not outside the class
  userId: number;
  googleId?: number;
  constructor(email: string, userId: number, _courseCount?: number) {
    this.email = email;
    this.userId = userId;
    this._courseCount = 0;
  }
  private deleteToken() {
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  set courseCount(count: number) {
    //should not the type for the function
    if (count < 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = count;
  }
}
class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const user = new User("5z5wO@example.com", 123);
console.log(user.email);

export {};
