import React from 'react';
import '../styles/FeeDetails.css';
import Navbar from '../UserNavbar';

const FeeDetails = () => {
  // Sample fee data
  const feeDetails = [
    { year: 'First Year', totalFees: 'Rs.43,965' },
    { year: 'Second Year', totalFees: 'Rs.35,000*' },
    { year: 'Third Year', totalFees: 'Rs.35,000*' },
    { year: 'Fourth Year', totalFees: 'Rs.35,000*' },
  ];

  const additionalFeeDetails = [
    { year: 'Fifth Year', totalFees: 'Rs.73,965' },
    { year: 'Sixth Year', totalFees: 'Rs.65,000' },
    { year: 'Third Year', totalFees: 'Rs.65,000' },
    { year: 'Fourth Year', totalFees: 'Rs.65,000' },
  ];

  return (
    <>
      <Navbar />
      <div className="fee-details">
        <h2>Fee Structure(Merit)</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Year of Study</th>
              <th>Total Fees</th>
            </tr>
          </thead>
          <tbody>
            {feeDetails.map((fee) => (
              <tr key={fee.year}>
                <td>{fee.year}</td>
                <td>{fee.totalFees}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Fee Structure(Management)</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Year of Study</th>
              <th>Total Fees</th>
            </tr>
          </thead>
          <tbody>
            {additionalFeeDetails.map((fee) => (
              <tr key={fee.year}>
                <td>{fee.year}</td>
                <td>{fee.totalFees}</td>
              </tr>
            ))}
          </tbody>
        </table>
        Note*:Tuition Fee Waiver(TFW) for Top two candidates from each course.
      </div>
    </>
  );
};

export default FeeDetails;
