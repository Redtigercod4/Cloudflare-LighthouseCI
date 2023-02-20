/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const {createServer} = require('@lhci/server');

async function lighthouseServer () {
	createServer({
		port: 3000,
		storage: {
			storageMethod: 'sql',
			sqlDialect: 'sqlite3',
			sqlDatabasePath: env.binding,
		},
	}).then(({port}) => console.log('LHCI Listening on port', port));
}

export default {
	async fetch (request) {
		await lighthouseServer();
	}
}
