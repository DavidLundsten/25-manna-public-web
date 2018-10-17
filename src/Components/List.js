import React from 'react';
import {ReactDOM} from 'react-dom';
import { Paper, TableCell, TableHead, TableBody, Table, TableRow} from '@material-ui/core';


export const  List = () => {

    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
        id += 1;
        return { id, name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
        return (
            <Paper >
                <Table >
                    <TableHead style={{backgroundColor:'pink'}}>
                        <TableRow>
                            <TableCell>Leg</TableCell>
                            <TableCell numeric>Dist</TableCell>
                            <TableCell numeric>Out</TableCell>
                            <TableCell numeric>In</TableCell>
                            <TableCell numeric>Behind</TableCell>
                            <TableCell numeric>Pos</TableCell>
                            <TableCell numeric>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell numeric>{row.calories}</TableCell>
                                    <TableCell numeric>{row.fat}</TableCell>
                                    <TableCell numeric>{row.carbs}</TableCell>
                                    <TableCell numeric>{row.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }




