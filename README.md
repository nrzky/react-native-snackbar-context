# react-native-snackbar-context

Snackbar component for React Native

## Installation

```sh
npm install react-native-snackbar-context --save
```
or

```sh
yarn add react-native-snackbar-context
```

## Usage

### Snackbar Provider

```tsx
import { SnackbarProvider } from "react-native-snackbar-context";

const App: React.FC = () => {
  return (
    <SnackbarProvider>
      /* Other Components */
    </SnackbarProvider>
  );
}

export default App;
```


| Name         | Type   | Default        |
|--------------|--------|----------------|
| spaces       | object | SnackbarSpaces |
| colorPalette | object | SnackbarColors |
| duration     | number | 3000           |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
