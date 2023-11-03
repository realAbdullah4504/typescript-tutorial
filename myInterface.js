"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abd = {
  id: 1,
  email: "a@a.com",
  userId: 1,
  googleId: 1,
  role: "admin",
  gitHubId: 1,
  startTrial: function () {
    return "trial started";
  },
  getCoupon: function (couponName) {
    if (couponName === void 0) {
      couponName = "10";
    }
    return 10;
  },
  //   getCoupon(name: "10") {
  //     return 10;
  //   },
};
