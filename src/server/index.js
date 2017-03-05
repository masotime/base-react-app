import express from 'express';
import { PORT } from 'common/constants';

// bundling of bundle.js
import bundler from 'server/bundler';

// hot-reloading of express routes
import initWatcher from 'server/watcher';

const app = express();

app.use(bundler());

// here we use a require statement instead of imports to enable hot reloading
initWatcher(require.resolve('server/router'));
app.use('/', (req, res, next) => require('server/router').default(req, res, next));

app.listen(PORT, () => console.log(`✅  Web server started at http://localhost:${PORT}`));