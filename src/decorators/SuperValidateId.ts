import 'reflect-metadata';
const requiredMetadataKey = Symbol('ValidId');

export const ValidId = () => {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        let existingRequiredParameters: number[] =	Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];

        existingRequiredParameters.push(parameterIndex);

        Reflect.defineMetadata(
            requiredMetadataKey,
            existingRequiredParameters,
            target,
            propertyKey
        );
    };
}

export const SuperValidateId = () => {
	return (
		target: Object,
		propertyName: string | symbol,
		descriptor: TypedPropertyDescriptor<(id: any) => number | null>
	) => {
		const originalMethod = descriptor.value!;

		descriptor.value = (id: any) => {
			let requiredParameter: number = Reflect.getOwnMetadata(
				requiredMetadataKey,
				target,
				propertyName
			);

			if (!requiredParameter) {
				return null;
			}

			return originalMethod(requiredParameter);
		};
	};
};

