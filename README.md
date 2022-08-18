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
#### Snackbar Provider Props

| Name         | Type   | Default        |
|--------------|--------|----------------|
| spaces       | object | SnackbarSpaces |
| colorPalette | object | SnackbarColors |
| duration     | number | SnackbarDurations.REGULAR           |

### useSnackbarContext

```tsx
import {
  useSnackbarContext,
  SnackbarMessageTypes,
  SnackbarDurations
} from "react-native-snackbar-context";

const Component: React.FC = () => {
  const { showMessage, hideMessage } = useSnackbarContext();

  const handleShowMessage = React.useCallback(() => {
    showMessage({
      type: SnackbarMessageTypes.SUCCESS,
      message: 'React Native Snackbar Context',
      duration: SnackbarDurations.FAST,
      actions: [{ title: 'OK', onPress: hideMessage }],
    });
  }, [showMessage, hideMessage])
  
  return (
    <Button title={'Show Snackbar'} onPress={handleShowMessage} />
  );
}

export default Component;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
