require('dotenv').config();
const http = require('http'),
	{GoogleAuth} = require('google-auth-library'),
	{google} = require('googleapis'),
	fs = require('fs'),
	path = require('path'),
	express = require('express'),
	app = express();

const auth = new GoogleAuth({
	credentials: {
		private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
		client_email: process.env.GOOGLE_CLIENT_EMAIL
	},
	scopes: [
		'https://www.googleapis.com/auth/drive',
		'https://www.googleapis.com/auth/spreadsheets'
	]
});

const drive = google.drive({
	version: 'v3',
	auth: auth
});

app.use(express.static(__dirname));
app.get('/', function(req, res, next) {
	res.sendFile('index.html');
});

var item_list = [];
app.get('/data', async function(req, res, next) {
	let new_list = await get_file();
	item_list = (new_list == null) ? item_list : new_list;
	res.send(item_list);
});

var inport = process.env.PORT;
var server = http.createServer(app);
server.listen(inport);
console.log('HTTP server listening on %d', inport);

async function get_file() {
	try {
		let item_file = await drive.files.export({
			fileId: '1_d7rW7yOMp4zYAzfnYerHpt5zoFFRtp9lINq0Xsxk6s',
			mimeType: 'text/csv'
		});
		items = [];
		item_file.data.split('\r\n').forEach((line, index) => {
			if (index > 0) {
				let line_items = [];
				let line_item = '';
				let comma_check = true;
				let count = 0;
				for (let ch of line) {
					if (ch === '"') {
						comma_check = !comma_check;
					}

					if (comma_check && (ch === ',' || count == line.length-1)) {
						line_item += (ch === ',') ? '' : ch;
						line_items.push(line_item);
						line_item = '';
					} else {
						line_item += ch;
					}
					++count;
				}
				let item = {
					Name: line_items[0].replaceAll('"',''),
					Price: line_items[1],
					Image: line_items[2],
					Category: line_items[3],
					BestOffer: (line_items[4] == 'TRUE'),
					Available: (line_items[5] == 'TRUE')
				}
				items.push(item);
			}
		});
		console.log(items);

		let res = await drive.files.list({
			fields: 'nextPageToken, files(id, name)'
		});
		return items;
	} catch(ex) {
		console.warn(`Error trying to get file: '${ex}'`)
		return null
	}
}
