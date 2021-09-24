import {replaceWhitespace} from '../utils/replaceWhitespace-test'

test.todo('converts string "att directv" to "att%20directv"'),
  () => {
    expects(replaceWhitespace('att directv').toBe('att%20directv'));
  };
