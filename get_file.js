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