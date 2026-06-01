import dotenv from 'dotenv';
import app from './app';

dotenv.config({ quiet: true });

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
