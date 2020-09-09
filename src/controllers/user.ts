import { Request, Response } from "express";

class UserController {
  static register(_: Request, res: Response) {
    res.send("Register")
  }
  static login(_: Request, res: Response) {
    res.send("Login")
  }
  static getUser(_: Request, res: Response) {
    res.send("User")
  }
}

export default UserController;