import { browser } from '$app/environment';

export const imageUrlToBase64 = async (url: string) => {
	console.log('running image to Base65', url);

	if (!browser) throw new Error('This function can only be called in the browser');

	const img = new Image();
	img.crossOrigin = 'anonymous';
	img.src = url;

	await new Promise((resolve) => (img.onload = resolve));

	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = img.width;
	canvas.height = img.height;

	ctx?.drawImage(img, 0, 0);
	return canvas.toDataURL('image/jpeg');
};
