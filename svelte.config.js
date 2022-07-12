import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				crossOriginIsolation()
			]
		}
	}
};

export default config;
