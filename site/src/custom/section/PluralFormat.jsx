import React, {PropTypes} from 'react';
import connect from '../connect';
import Code from './Code';

class PluralFormat extends React.Component {
  static propTypes = {
    intl: PropTypes.object
  };

  state = {
    value: 1
  }

  renderCode = () => (
    <div className='clearfix'>
      <Code
        rule='NUM_ADDS, plural, offset: 1'
        conditions={[
          ['=0', 'You did not add this'],
          ['=1', 'You added this'],
          ['=2', 'You and one other person added this'],
          ['other', 'You and # others added this']
        ]}
      />
    </div>
  )

  renderInput = () => (
    <div className='clearfix code-value sm-col-8 mx-auto'>
      <input
        className="input"
        type='number'
        onChange={(evt) => {
          const {value} = evt.target
          this.setState({value: value < 0 ? 0 : value})
        }}
        value={this.state.value}
      />
    </div>
  )

  renderResults = () => (
    <div className='code-results'>
      {this.props.intl.formatMessage({id: 'plural'}, {NUM_ADDS: this.state.value})}
    </div>
  )

  render() {
    window.test = this.props.intl.formatMessage;
    return (
      <div className='app-section clearfix'>
        <div className='sm-col-8 md-col-6 mx-auto'>
          {this.renderCode()}
          <span className='code-plus'>+</span>
          {this.renderInput()}
          <span className='code-equals'>=</span>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(PluralFormat);
