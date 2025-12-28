import fs from 'fs';
import path from 'path';

// имя файла, который нельзя переименовывать
const IGNORE_FILE = 'rename.js';

// текущая директория
const directoryPath = './';

fs.readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
	if (err) {
		console.error('Error reading directory:', err);
		return;
	}

	// оставляем только файлы и исключаем rename.js
	const files = entries
		.filter((entry) => entry.isFile() && entry.name !== IGNORE_FILE)
		.map((entry) => entry.name)
		.sort();

	files.forEach((file, index) => {
		if (index >= 100) return; // ограничение 1–100

		const ext = path.extname(file);
		const newName = `${index + 1}${ext}`;

		const oldPath = path.join(directoryPath, file);
		const newPath = path.join(directoryPath, newName);

		fs.rename(oldPath, newPath, (err) => {
			if (err) {
				console.error(`Error renaming ${file}:`, err);
			} else {
				console.log(`${file} → ${newName}`);
			}
		});
	});
});
