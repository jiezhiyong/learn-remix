const { setupServer } = require('msw/node');
const handlers = require('./handlers.cjs');
const server = setupServer(...handlers);

server.listen({ onUnhandledRequest: 'warn' });
console.info('🔶 Mock server running ...');

process.once('SIGINT', () => server.close());
process.once('SIGTERM', () => server.close());
