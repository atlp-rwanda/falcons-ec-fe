/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({gender, preferredCurrency, preferredLanguage, birthDate}) => {
  return (
    <div>
            <h4>personal information</h4>
            <div className='personal-info'>
            <div>
                <p>gender:</p>
                <p>preffered language:</p>
                <p>preffered currency:</p>
                <p>birth date:</p>
                </div>
                <div>
                <p>{gender}</p>
                <p>{preferredLanguage}</p>
                <p>{preferredCurrency}</p>
                <p>{birthDate}</p>
                </div>
            </div>
            </div>
  )
}

UserInfo.propTypes = {
    gender: PropTypes.string,
    preferredCurrency: PropTypes.string,
    preferredLanguage: PropTypes.string,
    birthDate: PropTypes.string,

}

export default UserInfo