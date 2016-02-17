
import Mythbuster from '..';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
describe('Icon', () => {
  it('is compatible with React.Component', () => {
    Mythbuster.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Mythbuster/>).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    it('FILL THIS IN', () => {
      renderer.render(<Mythbuster/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <div/>
      );
    });

  });

});
