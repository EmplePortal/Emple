import app from './app.js';
import { config } from './config/index.js';
import connectDB from './config/db.js';

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.env} mode on port ${config.port}`
      );
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();