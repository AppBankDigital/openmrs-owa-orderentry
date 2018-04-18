import React from 'react';
import ConnectedHeader, {
  Header
} from '../../../app/js/components/header';

let props;
let mountedComponent;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<Header {...props} />);
  }
  return mountedComponent;
};

describe('Component: Header', () => {
  beforeEach(() => {
    props = {
      fetchCurrentSession: jest.fn(),
      fetchLocations: jest.fn(),
      currentLocation: {},
      locations: [],
      setCurrentLocation: jest.fn(),
    };
    mountedComponent = undefined;
  });

  it('should render properly', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  describe('Connected Header component', () => {
    it('component successfully rendered', () => {
      const store = mockStore({
        sessionReducer: {
          currentLocation: { display: "Amani Hospital" },
          currentUser: "admin",
        },
        locationReducer: {
          locationTags: []
        }
      });
      const wrapper = shallow(<ConnectedHeader store={store} />);
      expect(wrapper.length).toBe(1);
    });
  });
});
