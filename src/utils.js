import styled from 'styled-components/macro'

export const SelectList = styled.select`
  width: 86.5%;
  margin-top: 4px;
  margin-right: -36px;
  background-image: ${(props) =>
    props.upArrow
      ? ''
      : 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A")'};
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 50%;
  border-radius: 2px;
  border: 2px black;
  outline-style: solid;
  outline-width: 1.35px;
  outline-color: gray;
  border-radius: 3px;
  padding: 4px 30px 4px 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`
export const categories = [
  {
    name: 'Technology',
    item: ['Technical', 'Non-Technical', 'Infrastructure', 'Marketing'],
  },
  {
    name: 'Education',
    item: [
      'Design',
      'Automobile',
      'Manufacturing',
      'Stocks & Shares',
      'Business',
    ],
  },
  {
    name: 'Innovation',
    item: [
      'Digital Transformation',
      'Organizational Transformation',
      'Ecosystem and Startup Collaboration',
    ],
  },
]

export const joinString = (str) => str.split(' ').join('')
export const sortedArray = (localValue) => {
  localValue.sort((a, b) => {
    let first = a.name.toLowerCase()
    let last = b.name.toLowerCase()

    if (first < last) {
      return -1
    }
    if (first > last) {
      return 1
    }
    return 0
  })
}
