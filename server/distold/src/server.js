import app from './app.js';
import testDirectConnection from './config/dbConnection.js';
import { env } from './config/env.js';
import { registerNotificationCrons } from './modules/notification/notification.cron.js';
testDirectConnection();
registerNotificationCrons();
app.listen(env.PORT, () => {
    console.log(`Server is running on port: ${env.PORT} `);
});
//# sourceMappingURL=server.js.map