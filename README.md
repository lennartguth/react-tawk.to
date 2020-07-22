## Getting Started

### Documentation

You can find for more details, API, and other docs on [tawk.to](https://www.tawk.to/javascript-api/) website.

### Usage

Import the file into your index.js or app.js file:

```javascript
import tawkTo from '../util/tawkto'
```

Initialize the widget with the useEffect hook:

```javascript
// initialize tawkto widget
const tawkToPropertyId = process.env.REACT_APP_TAWKTO_ID
useEffect(() => {
    if (email) {
        tawkTo(tawkToPropertyId, email, firstName, lastName)
    }
}, [email, firstName, lastName])
```

## License

This code is licensed under a [MIT License](./LICENSE).
