import React from 'react';
import spinner_SVG from '../assets/spinner.svg';

export const SubmitButton = ({ loading, text, spinnerHeight = '25px' }) => {
  return (
    <button
      type="submit"
      className="btn-submit"
      disabled={loading ? true : false}
    >
      {loading ? (
        <img src={spinner_SVG} style={{ height: `${spinnerHeight}` }} />
      ) : (
        `${text}`
      )}
    </button>
  );
};
