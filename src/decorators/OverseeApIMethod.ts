const OverseeApiMethod = () => {  
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value.bind(target);

        if (originalMethod.constructor.name === 'AsyncFunction') {
            descriptor.value = async (...args: any[]) => {
                try {
                    const response = await originalMethod(...args);
    
                    return response.catch((error: any) => {
                        return { 
                            "message": `Request Failed: ${error.message}`
                        };
                    });
    
                } catch(error: any) {
                    throw new Error(error.message); 
                }
            };
        } else {
            descriptor.value = (...args: any[]) => {
                try {
                    const response = originalMethod(...args);
    
                    return response;
    
                } catch(error: any) {
                    throw new Error(error.message); 
                }
            };
        }
        
        return descriptor;
    }
}

export default OverseeApiMethod;