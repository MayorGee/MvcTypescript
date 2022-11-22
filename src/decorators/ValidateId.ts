const ValidateId = () => {
	return (
		target: Object,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const originalMethod = descriptor.value;

		descriptor.value = async (id: any) => {
			const isValidNumber = typeof id === 'number' && Number.isInteger(id);
			const isValidString = typeof id === 'string' && Number.isInteger(parseInt(id));

			const isValidId = id || isValidNumber || isValidString

			if (!isValidId) {
				throw new Error('Invalid Id Entered');
			}
		    
			return originalMethod(id);
		}
	}
}

export default ValidateId;