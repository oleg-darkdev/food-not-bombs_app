import fs from 'fs';
import path from 'path';

// список названий
const names = [
	'thailand',
	'myanmar',
	'malaysia',
	'indonesia',
	'singapore',
	'philippines',
	'japan',
	'south korea',
	'china'
];



// куда сохранять файлы
const outputDir = path.resolve('./');

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// содержимое ts-файла
const fileContent = `const data = [];

export default data;
`;

function normalizeFileName(name) {
	return name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
}

names.forEach((name) => {
	const fileName = `${normalizeFileName(name)}.ts`;
	const filePath = path.join(outputDir, fileName);

	fs.writeFileSync(filePath, fileContent, 'utf8');
	console.log(`✔ created ${fileName}`);
});
