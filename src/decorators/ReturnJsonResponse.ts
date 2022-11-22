import { NextFunction, Request, Response } from "express";

const ReturnJsonResponse = () => {  
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value.bind(target);

        descriptor.value = async (req: Request, res: Response, next: NextFunction ): Promise<Response> => {
            try {
                const data = await originalMethod(req, res, next);
    
                return res.status(200).json({
                    data: data
                });
    
            } catch(error: any) {
                return res.status(500).json({
                    errorMessage: error.message
                });
            }
        };
        
        return descriptor;
    }
}

export default ReturnJsonResponse;