import {Request, Response } from 'express' 
import CreateCourseService from './createCourseService'


export function createCourse(request: Request, response: Response){
 CreateCourseService.execute('Node.js', 10, 'Dani'); 

 return response.send(); 
}