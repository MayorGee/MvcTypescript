const CalculateExecutionTime = () => {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value.bind(target);
        let originalResult;

        console.time(propertyKey);

        if (originalMethod.constructor.name === 'AsyncFunction') {
            descriptor.value = async (...args: any[]) => {
                originalResult = await originalMethod(...args);
            }
        } else {
            descriptor.value = (...args: any[]) => {
                originalResult = originalMethod(...args);   
            }
        }

        console.timeEnd(propertyKey);

        return originalResult;
    }
}

export default CalculateExecutionTime;