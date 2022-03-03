import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Select from '@material-ui/core/Select'
import './FilterPanel.css'
import { InputLabel, MenuItem, makeStyles, FormControl } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  filters: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: '100%',
    justifyContent: 'space-between'
  }
}))

const FilterPanel = () => {

  const classes = useStyles()

  const [value, setValue] = useState('')
  const handleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value)
  }

  return (
    <div>

      {/* Search */}
      <div className='searchBar'>
        {/* search bar icon from material UI */}
        <SearchIcon className="searchBar-icon"/>
        {/* input from material UI */}
        <input type='text'
          placeholder='Search Products'
          // value={value}
          // onChange={changeInput}
        />
      </div>
      

      {/* Filters */}
      <div className='filters'>
          {/* 01 category */}
          <div className="categoryWrap">
            <p className="categoryText">Category</p>
            <FormControl className={classes.filters}>
              <InputLabel>Select</InputLabel>
              <Select labelId='selectLabelId' id='selectId' value={value} onChange={handleChange} >
                <MenuItem value='Select'>None</MenuItem>
                <MenuItem value='Vegetables'>Vegetables</MenuItem>
                <MenuItem value='Fruits'>Fruits</MenuItem>
                <MenuItem value='Toiletries'>Toiletries</MenuItem>
                <MenuItem value='Meat'>Meat</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* 02 Location */}
          <div className="locationWrap">
            <p className="locationText">Location</p>
            <FormControl className={classes.filters}>
              <InputLabel>Select</InputLabel>
              <Select labelId='selectLabelId' id='selectId' value={value} onChange={handleChange} >
                <MenuItem value='Select'>None</MenuItem>
                <MenuItem value='Rohrbach'>Vegetables</MenuItem>
                <MenuItem value='Altstadt'>Fruits</MenuItem>
                <MenuItem value='Wieblingen'>Toiletries</MenuItem>
                <MenuItem value='Bahnstadt'>Meat</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* 03 Store */}
          <div className="storeWrap">
            <p className="storeText">Store</p>
            <FormControl className={classes.filters}>
              <InputLabel>Select</InputLabel>
              <Select labelId='selectLabelId' id='selectId' value={value} onChange={handleChange} >
                <MenuItem value='Select'>None</MenuItem>
                <MenuItem value='Aldi'>Vegetables</MenuItem>
                <MenuItem value='Rewe'>Fruits</MenuItem>
                <MenuItem value='Netto'>Toiletries</MenuItem>
                <MenuItem value='Lidl'>Meat</MenuItem>
              </Select>
            </FormControl>
          </div>
        
      </div>

    </div>
  )
}

export default FilterPanel





