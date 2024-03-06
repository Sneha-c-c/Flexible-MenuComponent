// src/Option.js

import React from 'react';

// const Option = ({ label, icon, showCheckmark ,disabled}) => {
//   return (
//     <li className={`option ${disabled ? 'disabled' : ''}`}>
//       {icon && <img src={icon} alt="Icon" />}
//       {label}
//       {showCheckmark && <span className="checkmark">&#10003;</span>}
//     </li>
//   );
// };

// export default Option;
// src/Option.js

// const Option = ({ label, icon, showCheckmark, disabled }) => {
//     const optionClassName = `option ${disabled ? 'disabled' : ''}`;
  
//     return (
//       <li className={optionClassName}>
//         {icon && <img src={icon} alt="Icon" />}
//         {label}
//         {showCheckmark && <span className="checkmark">&#10003;</span>}
//       </li>
//     );
//   };
// export default Option;
// const Option = ({ label, icon, showCheckmark, disabled }) => {
//     const optionClassName = `option ${disabled ? 'disabled' : ''}`;
  
//     return (
//       <li className={optionClassName}>
//         {icon && <img src={icon} alt="Icon" className="option-icon" />} {/* Show icon if available */}
//         {label}
//         {showCheckmark && <span className="checkmark">&#10003;</span>}
//       </li>
//     );
//   };
const Option = ({ label, icon, showCheckmark, disabled }) => {
    const optionClassName = `option ${disabled ? 'disabled' : ''}`;
  
    return (
      <li className={optionClassName}>
        {icon && <img src={icon} alt="Icon" className="option-icon" />} {/* Show icon if available */}
        {label}
        {showCheckmark && <span className="checkmark">&#10003;</span>}
      </li>
    );
  };
export default Option;