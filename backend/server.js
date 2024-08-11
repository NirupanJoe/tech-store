const app = require('./app');
const connectDatabase = require('./config/database');

connectDatabase();

const defaultPORT = 8000;
const PORT = process.env.PORT || defaultPORT;

app.get('/api', (req, res) => {
	res.send('API is running...');
});

app.listen(PORT, () => {
	console.log(`My Server listening to the port: ${ PORT } in ${ process.env.NODE_ENV }`);
});
