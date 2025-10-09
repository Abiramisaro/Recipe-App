import { TextInput } from 'react-native';

const TextBox = ({placeholder = '',multiline=false, value,style, keyboardType= 'default', onChangeText
}) => (
    <TextInput placeholder={placeholder}
    multiline={multiline} style={style} value={value} keyboardType={keyboardType}
    onChangeText={onChangeText}  />
);

export default TextBox;
