import {replaceWhitespace} from '../screens/HomeScreen';
import {getVideos} from '../services/getVideos';

test('converts string "att directv" to "att%20directv"', () => {
  const result = replaceWhitespace('att directv');
  expect(result).toBe('att%20directv');
});

test('Should replace whitespaces with %20', () => {
  const result = replaceWhitespace('att directv');
  expect(result).not.toBe('att directv');
});

test('Should not have a whitespace after running function', () => {
  const result = replaceWhitespace('att direct tv');
  expect(result).not.toMatch(/ /);
});

test('should return an array of objects',
() => {
  const result = getVideos('att%20directv').then((data) => { return(data.items[0]['etag'])})
  expect(result).toBeDefined()
})

// toEqual tests value of object ({key:value})
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
// expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);
// Arrays .toContain('word')

//[{"etag": "uAoJ355wxfYx-OYz7NPr5JUClW4", "id": [Object], "kind": "youtube#searchResult", "snippet": [Object]}, {"etag": "1a2yGKkPWQFV3hOH1THR_IUUcU4", "id": [Object], "kind": "youtube#searchResult", "snippet": [Object]}, {"etag": "73Srx3X0DPENF5tySBnEthenSCM", "id": [Object], "kind": "youtube#searchResult", "snippet": [Object]}, {"etag": "VopQ4QB-SITrVzx-yFgiN4Oy9go", "id": [Object], "kind": "youtube#searchResult", "snippet": [Object]}, {"etag": "0k_L3deVJT6BPQO_wGML8fnPDsM", "id": [Object], "kind": "youtube#searchResult", "snippet": [Object]}]
