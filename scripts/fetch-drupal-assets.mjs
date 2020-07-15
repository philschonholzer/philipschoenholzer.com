import fs from 'fs-extra'
import fetch from 'isomorphic-unfetch'
import R from 'ramda'
const { compose, map, tap, andThen } = R

const log = tag => tap(data => console.log(tag, data))

const storeToFile = ({ data, fileName }) =>
  fs.outputFile(`./drupal/${fileName}`, data).then(() => fileName)

const fetchAsset = fileName =>
  fetch(`http://localhost:8080/${fileName}`)
    .then(res => res.text())
    .then(data => ({ fileName, data }))
    .catch(e => console.error(e))

const fetchAllAndStore = compose(
  map(andThen(log('stored file'))),
  map(andThen(storeToFile)),
  map(fetchAsset)
)

fetchAllAndStore(['header.html', 'footer.html', 'style.css'])
