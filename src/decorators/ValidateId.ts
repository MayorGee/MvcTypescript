const ValidateId = () => {
	return (
		target: Object,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const originalMethod = descriptor.value;

		descriptor.value = (id: any): number | string | undefined => {
			if (typeof id === 'number' && Number.isInteger(id)) {
				return originalMethod(id);
			}
			
			if (typeof id === 'string' && Number.isInteger(parseInt(id))) {
				return originalMethod(id);
			}
		}
	}
}

export default ValidateId;