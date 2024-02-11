import { Box, FormControl, Paper } from '@mui/material'
import { SelectBox } from 'devextreme-react'
import React from 'react'

export default function Demo() {
    const bookingType = [
        "Online", "Offline", "direct", "indirect"
    ]

    return (
        <>
            <Box sx={{ marginTop: 9 }}>
                <Paper elevation={5} sx={{ p: 3 }}>
                    <FormControl variant='outlined'>

                        <SelectBox dataSource={bookingType}
                            stylingMode="underlined"
                            placeholder="Select..."
                            label='Booking Office'
                            searchEnabled={true}

                            className='select-box-text'
                            searchMode="contains"
                            searchTimeout={200}
                            value="Online"
                        // onValueChanged={editBoxValueChanged}
                        />
                    </FormControl>
                </Paper>

            </Box>
        </>
    )
}
