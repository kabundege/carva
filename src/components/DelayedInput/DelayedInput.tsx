import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {TextInput, TextInputProps, ViewProps} from 'react-native';
import {InputProps} from '../Input/Input';
import Input from '../Input';

interface DelayedInputProps {
  editable?: boolean;
  delayTimeOut?: number;
  initialValue?: string;
  handleChange?: (val: string) => void;
}

export type Props = TextInputProps & ViewProps & InputProps & DelayedInputProps;

const DelayedInput = forwardRef<TextInput, Props>(
  (
    {
      delayTimeOut = 250,
      editable = true,
      initialValue,
      handleChange,
      onPress,
      ...rest
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useState<string>('');
    const inputRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
      inputRef.current = setTimeout(() => {
        if (handleChange) {
          handleChange(localValue);
        }
        clearTimeout(inputRef.current);
      }, delayTimeOut);
    }, [localValue, delayTimeOut, handleChange]);

    useEffect(() => {
      if (initialValue) {
        setLocalValue(initialValue);
      }
    }, [initialValue]);

    return (
      <Input
        {...rest}
        ref={ref} // Attach the forwarded ref to the Input component
        onPress={onPress}
        value={localValue}
        editable={editable}
        onPressIn={onPress}
        onChangeText={setLocalValue}
      />
    );
  },
);

export default DelayedInput;
