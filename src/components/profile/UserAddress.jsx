import React from 'react'
import PropTypes from 'prop-types'

const UserAddress = ({BillingAddress}) => {
  return (
          <div>
           <h4> address</h4>
            <div className='profile-address'>
                <div>
                <p>province:</p>
                <p>district:</p>
                <p>sector:</p>
                <p>cell:</p>
                <p>street:</p>
                </div>
                <div className='personal-adress'>
                <p>{BillingAddress?.province}</p>
                <p>{BillingAddress?.district}</p>
                <p>{BillingAddress?.sector}</p>
                <p>{BillingAddress?.cell}</p>
                <p>{BillingAddress?.street}</p>
                </div>
            </div>
            </div>
  )
}

UserAddress.propTypes = {
    province: PropTypes.string,
    district: PropTypes.string,
    sector: PropTypes.string,
    cell: PropTypes.string,
    street: PropTypes.string
}

export default UserAddress;
