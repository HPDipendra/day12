import { Request, Response } from "express";
import service from "../service/userService"



export default class UserController {

  async addUser(req: Request, res: Response) {

    console.log(req.body);
   
    const result: any = await service.userAdd(req.body)
    res.status(200).send(result)

  }

  async getById(req: Request, res: Response) {

    console.log(req.params);

    const {id} = req.params
    const result: any = await service.getById(id)
    res.status(200).send(result)

  }

  async delete(req: Request, res: Response) {

    console.log(req.params);

    const {id} = req.params
    const result: any = await service.delete(id)
    res.status(200).send(result)

  }



  async getAll(req: Request, res: Response) {

 
    const result: any = await service.getAll()
    res.status(200).send(result)

  }

  async update(req: Request, res: Response) {
    
    const{id}=req.params;
    const data:any = req.body;
 
    const result: any = await service.update(id,data)
    res.status(200).send(result)

  }

}
