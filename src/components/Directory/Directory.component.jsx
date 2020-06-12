import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../menu-item/MenuItem.component' 
import './Directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory =({sections}) => (
            <div className= 'directory-menu'>
            {
                sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key= {id} {...otherSectionProps} />
                ))
            }</div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)