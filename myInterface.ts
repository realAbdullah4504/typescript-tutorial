interface User {
  readonly id: number;
  email: string;
  userId: number;
  googleId?: number;
  startTrial: () => string;
  getCoupon: (couponName: string) => number;
  //   getCoupon(couponName: string): number;
}
interface User {
  gitHubId: number;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const abd: Admin = {
  id: 1,
  email: "a@a.com",
  userId: 1,
  googleId: 1,
  role: "admin",
  gitHubId: 1,
  startTrial: () => "trial started",
  getCoupon: (couponName = "10") => 10,
  //   getCoupon(name: "10") {
  //     return 10;
  //   },
};


export {};
