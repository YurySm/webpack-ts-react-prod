const path = require('path');
const fs = require('fs');

const cacheFolder = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rmSync(cacheFolder, { recursive: true, force: true });