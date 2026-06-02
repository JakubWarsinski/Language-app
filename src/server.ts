import dotenv from 'dotenv';
import app from './app';

dotenv.config({ quiet: true });

const PORT = Number(process.env.PORT);

const BASE_URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
	console.log('\nServer started successfully');
	console.log(`API: ${BASE_URL}/api`);
});
