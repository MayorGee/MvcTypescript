const CalculateExecutionTime = () => {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value.bind(target);

        descriptor.value = (...args: any[]) => {
            console.time(propertyKey);

            let decoratedMethod = originalMethod(...args);

            console.timeEnd(propertyKey);

            return decoratedMethod;
        }
    }
}

export default CalculateExecutionTime;