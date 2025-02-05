'use client'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import { styled } from '@mui/system'

const StyledFormControl = styled(FormControl)({
	minWidth: 140,
	backgroundColor: '#f9f9f9',
	borderRadius: '8px',
	boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
	padding: '8px',
	'& .MuiInputLabel-root': {
		fontSize: '14px',
		fontWeight: 500,
		color: '#555',
		transform: 'translate(14px, 16px) scale(1)',
	},
	'& .MuiInputLabel-shrink': {
		transform: 'translate(14px, -6px) scale(0.9)',
	},
	'& .MuiSelect-select': {
		padding: '10px 14px',
		borderRadius: '8px',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
})

const StyledMenuItem = styled(MenuItem)({
	fontSize: '14px',
	fontWeight: '500',
	color: '#333',
	padding: '10px 14px',
	'&:hover': {
		backgroundColor: '#e3f2fd',
	},
	'&.Mui-selected': {
		backgroundColor: '#1976d2',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#1565c0',
		},
	},
})

export const Select = ({ locale, t, languageChangeHandler }) => (
	<StyledFormControl variant='standard'>
		<InputLabel id='custom-select-label'>{t('language')}</InputLabel>
		<MuiSelect
			labelId='custom-select-label'
			id='custom-select'
			onChange={languageChangeHandler}
			defaultValue={locale}
		>
			<StyledMenuItem value='en'>{t('english')}</StyledMenuItem>
			<StyledMenuItem value='ru'>{t('russian')}</StyledMenuItem>
		</MuiSelect>
	</StyledFormControl>
)
