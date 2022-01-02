import { GetAllVideosServcie } from '../services/GetAllVideosService';
import { Request, Response } from "express";

export class GetAllServicesController{
    async handle(request: Request, response: Response){
        const service = new GetAllVideosServcie()
        const videos = await service.execute()

        return response.json(videos)
    }
}