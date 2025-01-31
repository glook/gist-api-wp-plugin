/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './public';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: {
		src: <svg
			version="1.1"
			x="0px"
			y="0px"
			viewBox="0 0 58.826726 77.803087"
			id="svg126"
			width="58.826725"
			height="77.803085"><defs id="defs130" />
			<g
				transform="matrix(18.976362,0,0,18.976362,-17.078726,-9.4881809)"
				id="g124">
	<g
		id="g122">
		<g
			id="g4">
			<circle
				className="st0"
				cx="1"
				cy="1.6"
				r="0.1"
				id="circle2"/>
		</g>
		<g
			id="g8">
			<circle
				className="st0"
				cx="1"
				cy="2"
				r="0.1"
				id="circle6"/>
		</g>
		<g
			id="g12">
			<circle
				className="st0"
				cx="1.2"
				cy="1.1"
				r="0.1"
				id="circle10"/>
		</g>
		<g
			id="g16">
			<circle
				className="st0"
				cx="3"
				cy="1.4"
				r="0.1"
				id="circle14"/>
		</g>
		<g
			id="g20">
			<circle
				className="st0"
				cx="3.9000001"
				cy="1.7"
				r="0.1"
				id="circle18"/>
		</g>
		<g
			id="g24">
			<circle
				className="st0"
				cx="3.8"
				cy="2.3"
				r="0.1"
				id="circle22"/>
		</g>
		<g
			id="g28">
			<circle
				className="st0"
				cx="3.4000001"
				cy="3.0999999"
				r="0.1"
				id="circle26"/>
		</g>
		<g
			id="g32">
			<circle
				className="st0"
				cx="3.2"
				cy="0.80000001"
				r="0.1"
				id="circle30"/>
		</g>
		<g
			id="g36">
			<circle
				className="st0"
				cx="3.5999999"
				cy="1.2"
				r="0.1"
				id="circle34"/>
		</g>
		<g
			id="g40">
			<circle
				className="st0"
				cx="2.3"
				cy="1.7"
				r="0.1"
				id="circle38"/>
		</g>
		<g
			id="g44">
			<circle
				className="st0"
				cx="2.9000001"
				cy="0.60000002"
				r="0.1"
				id="circle42"/>
		</g>
		<g
			id="g48">
			<circle
				className="st0"
				cx="1.6"
				cy="0.80000001"
				r="0.1"
				id="circle46"/>
		</g>
		<g
			id="g52">
			<path
				className="st0"
				d="m 1.8,4.3 c 0,0 0,-0.1 0,0 V 2.4 L 1.1,1.7 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 l 0.7,0.8 c 0,0 0,0 0,0 L 1.8,4.3 c 0.1,-0.1 0.1,0 0,0 z"
				id="path50"/>
		</g>
		<g
			id="g56">
			<path
				className="st0"
				d="m 2.2,4.6 c 0,0 -0.1,0 0,0 l -0.1,-2.5 -1,-1 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 l 1,1 c 0,0 0,0 0,0 v 2.6 c 0.1,0 0,0 0,0 z"
				id="path54"/>
		</g>
		<g
			id="g60">
			<path
				className="st0"
				d="m 2.6,4.6 c 0,0 0,0 0,0 V 1.3 c 0,0 0,0 0,0 L 3.1,0.8 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 2.7,1.3 2.6,4.6 c 0.1,0 0.1,0 0,0 z"
				id="path58"/>
		</g>
		<g
			id="g64">
			<path
				className="st0"
				d="m 3,4.3 c 0,0 0,-0.1 0,0 V 2.5 c 0,0 0,0 0,0 L 3.8,1.7 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 3.1,2.5 3,4.3 c 0.1,-0.1 0.1,0 0,0 z"
				id="path62"/>
		</g>
		<g
			id="g68">
			<path
				className="st0"
				d="m 3.6,2 c 0,0 0,0 0,0 L 3,1.5 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 l 0.5,0.5 c 0.1,0 0.1,0.1 0,0.1 0,0 0,0 0,0 z"
				id="path66"/>
		</g>
		<g
			id="g72">
			<path
				className="st0"
				d="m 1.8,1.7 c 0,0 -0.1,0 0,0 -0.1,0 -0.1,-0.1 0,-0.1 L 2.9,0.5 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 1.8,1.7 c 0,0 0,0 0,0 z"
				id="path70"/>
		</g>
		<g
			id="g76">
			<path
				className="st0"
				d="m 2.1,1.4 c 0,0 0,0 0,0 L 1.6,0.9 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 l 0.4,0.4 c 0.1,0.1 0.1,0.1 0,0.2 0.1,0 0,0 0,0 z"
				id="path74"/>
		</g>
		<g
			id="g80">
			<circle
				className="st0"
				cx="2.0999999"
				cy="0.60000002"
				r="0.1"
				id="circle78"/>
		</g>
		<g
			id="g84">
			<path
				className="st0"
				d="m 2.5,1 c 0,0 -0.1,0 0,0 L 2.2,0.7 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 L 2.6,0.9 C 2.5,0.9 2.5,1 2.5,1 c 0,0 0,0 0,0 z"
				id="path82"/>
		</g>
		<g
			id="g88">
			<path
				className="st0"
				d="m 2.6,2.1 c 0,0 0,0 0,0 L 2.3,1.7 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 L 2.7,2 c 0,0 0,0 -0.1,0.1 0.1,0 0,0 0,0 z"
				id="path86"/>
		</g>
		<g
			id="g92">
			<circle
				className="st0"
				cx="3"
				cy="2"
				r="0.1"
				id="circle90"/>
		</g>
		<g
			id="g96">
			<path
				className="st0"
				d="m 3.3,2.3 c 0,0 0,0 0,0 L 3,2.1 C 3,2 3,2 3,2 3,2 3.1,2 3.1,2 l 0.2,0.2 c 0.1,0 0.1,0.1 0,0.1 0,0 0,0 0,0 z"
				id="path94"/>
		</g>
		<g
			id="g100">
			<path
				className="st0"
				d="m 3.2,1.6 c 0,0 0,0 0,0 -0.1,0 -0.1,-0.1 0,-0.1 L 3.5,1.2 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 3.2,1.6 c 0.1,0 0,0 0,0 z"
				id="path98"/>
		</g>
		<g
			id="g104">
			<path
				className="st0"
				d="m 1.8,3 c 0,0 0,-0.1 0,0 L 0.9,2.1 C 0.9,2.1 0.9,2 0.9,2 1,2 1,2 1,2 l 0.8,0.8 c 0.1,0.1 0.1,0.1 0,0.2 0.1,-0.1 0,0 0,0 z"
				id="path102"/>
		</g>
		<g
			id="g108">
			<circle
				className="st0"
				cx="1.2"
				cy="2.9000001"
				r="0.1"
				id="circle106"/>
		</g>
		<g
			id="g112">
			<path
				className="st0"
				d="m 1.8,3.5 c 0,0 0,0 0,0 L 1.2,2.9 c 0,0 0,-0.1 0,-0.1 0,0 0.1,0 0.1,0 l 0.6,0.6 c 0,0 0,0.1 -0.1,0.1 0,0 0,0 0,0 z"
				id="path110"/>
		</g>
		<g
			id="g116">
			<path
				className="st0"
				d="m 3,3.1 c 0,0 0,0 0,0 C 3,3.1 3,3 3,3 L 3.7,2.3 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 3,3.1 c 0.1,0 0.1,0 0,0 z"
				id="path114"/>
		</g>
		<g
			id="g120">
			<path
				className="st0"
				d="m 3,3.6 c 0,0 0,0 0,0 0,0 0,-0.1 0,-0.1 L 3.4,3.1 c 0,0 0.1,0 0.1,0 0,0 0,0.1 0,0.1 L 3,3.6 c 0.1,0 0.1,0 0,0 z"
				id="path118"/>
		</g>
	</g>
</g>
</svg>
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
