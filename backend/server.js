const app = require('./app');
const connectDatabase = require('./config/database');

connectDatabase()

const PORT = process.env.PORT || 8000;

app.get('/api', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`My Server listening to the port: ${PORT} in ${process.env.NODE_ENV}`)
})
