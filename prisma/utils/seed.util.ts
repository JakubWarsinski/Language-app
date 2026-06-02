type SeedOptions<T> = {
	model: {
		deleteMany: (args?: any) => Promise<any>;
		create: (args: any) => Promise<any>;
	};

	data: T[];

	entityName: string;

	successMessage?: (item: T) => string;
};

export async function seedModel<T>({ model, data, entityName }: SeedOptions<T>) {
	try {
		await model.deleteMany();

		console.log(`Wyczyszczono tabelę: ${entityName}`);

		for (const item of data) {
			await model.create({
				data: item,
			});

			console.log(`Pomyślnie wykonano dodanie danych dla: ${entityName}`);
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Błąd seedowania ${entityName}:`, error.message);
		} else {
			console.error(`Nieoczekiwany błąd ${entityName}`);
		}

		throw error;
	}
}
