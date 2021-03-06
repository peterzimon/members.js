// Ref: https://reactjs.org/docs/context.html
const React = require('react');

const AppContext = React.createContext({
    site: {},
    member: {},
    action: '',
    brandColor: '',
    onAction: () => {}
});

export default AppContext;