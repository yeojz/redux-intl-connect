import React, {PropTypes} from 'react';

const propTypes = {
  rule: PropTypes.string,
  conditions: PropTypes.array
}

const getCondition = (key, condition, message) => (
  <div className='arg-condition' key={key}>
    <span className='arg-case'>{condition} </span>
    {"{ "}<span className='arg-message'>{message}</span>{" }"}
  </div>
);

const renderConditions = (conditions) => (
  conditions.map((value, key) => (
    getCondition(key, value[0], value[1])
  ))
);

const Code = (props) => (
  <code className='block border border-box rounded p3 app-snippet app-code'>
    <span className='ruleset'>
      {"{ "}
      <span className='rule'>{props.rule}</span>
      {renderConditions(props.conditions)}
      {" }"}
    </span>
  </code>
)

Code.propTypes = propTypes;
export default Code;
