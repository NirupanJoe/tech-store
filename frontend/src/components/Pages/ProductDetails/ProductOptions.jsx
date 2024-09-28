import { Fragment } from 'react';

const OptionSection = ({ title, renderOptions }) =>
	<div className="mb-4">
		<h2 className="font-semibold mb-2">{ title }</h2>
		<div className="flex space-x-4 mt-2">
			{ renderOptions }
		</div>
	</div>;

const renderColorOptions = (
	variants, selectedColor, setSelectedColor,
) =>
	[...new Map(variants.map((variant) => [variant.color, variant])).values()].map((variant, i) =>
		<Fragment key={ i }>
			<button
				className={ `border-2 border-gray-600 flex items-center
					justify-center h-9 rounded-full w-9 
					${ selectedColor === variant.colorName ? 'border-black' : 'border-transparent' }` }
				onClick={ () => setSelectedColor(variant.colorName) }
			>
				<div
					className="w-8 h-8 rounded-full border-2 border-gray-500"
					style={ { backgroundColor: variant.color } }
				/>
			</button>
		</Fragment>);

const renderStorageOptions = (
	variants, selectedStorage, setSelectedStorage,
) =>
	[...new Set(variants.map((variant) => variant.storage))].map((storageOption, i) =>
		<button
			key={ i }
			className={ `px-4 py-2 w-3/6 rounded-lg border ${
				selectedStorage === storageOption
					? 'border-primary-500 border-2'
					: 'border-gray-300'
			}` }
			onClick={ () => setSelectedStorage(storageOption) }
		>
			{ storageOption }
		</button>);

const renderMemoryOptions = (
	variants, selectedMemory, setSelectedMemory,
) =>
	[...new Set(variants.map((variant) => variant.ram))].map((memoryOption, i) =>
		<button
			key={ i }
			className={ `px-4 py-2 w-3/6 rounded-lg border ${
				selectedMemory === memoryOption ? 'border-primary-500 border-2' : 'border-gray-300'
			}` }
			onClick={ () => setSelectedMemory(memoryOption) }
		>
			{ memoryOption }
		</button>);

const ColorOptions = ({ variants, selectedColor, setSelectedColor }) =>
	<OptionSection
		title="Choose color"
		renderOptions={ renderColorOptions(
			variants, selectedColor, setSelectedColor,
		) }
	/>;

const StorageOptions = ({ variants, selectedStorage, setSelectedStorage }) =>
	<OptionSection
		title="Choose storage"
		renderOptions={ renderStorageOptions(
			variants, selectedStorage, setSelectedStorage,
		) }
	/>;

const MemoryOptions = ({ variants, selectedMemory, setSelectedMemory }) =>
	<OptionSection
		title="Choose memory"
		renderOptions={ renderMemoryOptions(
			variants, selectedMemory, setSelectedMemory,
		) }
	/>;

const ProductOptions = (props) =>
	<div>
		<ColorOptions { ...props }/>
		<StorageOptions { ...props }/>
		<MemoryOptions { ...props }/>
	</div>;

export default ProductOptions;
