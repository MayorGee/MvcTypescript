const CalculateExecutionTime = () => {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value.bind(target);
        let originalResult;

        if (originalMethod.constructor.name === 'AsyncFunction') {
            descriptor.value = async (...args: any[]) => {
                console.time(propertyKey);

                originalResult = await originalMethod(...args);

                console.timeEnd(propertyKey);
            };
        } else {
            descriptor.value = (...args: any[]) => {
                console.time(propertyKey);
    
                originalResult = originalMethod(...args);
    
                console.timeEnd(propertyKey);
            }
        }

        return originalResult;
    }
}

export default CalculateExecutionTime;