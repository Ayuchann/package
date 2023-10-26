const monk = require('monk');
const {
	color
} = require(__path + '/lib/color.js');

// Connection URL
const url = 'mongodb+srv://Miacantik:75KBVKqPHue3r1jE@cluster0.njkjca8.mongodb.net/?retryWrites=true&w=majority';

try {
	if (url == 'url mongodb') throw console.log(color('Cek konfigurasi database, var url belum diisi', 'red'));
} catch (e) {
	return;
}

const db = monk(url);

// Menambahkan logika pembuatan koleksi userDibo jika belum ada
db.then(async (database) => {
		console.log(color('Connected correctly to server, oke', 'green'));

		try {
			// Mengecek apakah koleksi userDibo sudah ada
			const collections = await database.listCollections();

			if (collections.some((collection) => collection.name === 'userDibo')) {
				console.log('Collection userDibo already exists.');
			} else {
				console.log('Collection userDibo does not exist, creating it...');
				// Membuat koleksi userDibo jika belum ada
				database.create('userDibo', (err, collection) => {
					if (err) {
						console.log(color('Error: ' + err, 'red'));
					} else {
						console.log('Collection userDibo created.');
					}
				});
			}
		} catch (error) {
			console.log(color('Error: ' + error, 'red'));
		}
	})
	.catch((e) => {
		console.log(color('Error: ' + e + '\n\nGagal connect ke database, cek konfigurasi database apakah Connection URL sudah benar', 'red'));
	});

module.exports = db;
