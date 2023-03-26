import React, { useReducer } from 'react'

type Props = {}

const defaultDosage = {
	person: {
		age: 0,
		weight: 0,
	},
	drog: {
		name: '',
		total: 0,
	},
	intake: [

	],
};

const dosageReducer = (state: {}, action: string) => {

	return {...state};
};

export default function Calculator({ }: Props) {
	const dosage = useReducer(dosageReducer, defaultDosage);

	return (
		<div className='p-2 prose max-w-none'>
			<div>
				<h2 className='m-0 mb-2'>Calculator</h2>
			</div>
			<div>
				days
			</div>
		</div>
	)
}
