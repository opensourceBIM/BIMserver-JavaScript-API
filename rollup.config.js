import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'js/bimserverclient.js',
	output: {
		format: 'umd',
		name: 'bimserverapi',
		file: 'build/bimserverapi.js'
	},
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			preferBuiltins: true,
			browser: true
		}),
		commonjs({
			sourceMap: false
		}),
		babel({
			exclude: ['node_modules/**']
		})
	]
};