import $ from 'jquery'
import Handlebars from 'handlebars'
import indextmpl from '../templates/index.hbs!text'
import headertmpl from '../templates/header.hbs!text'

let tmpl = Handlebars.compile(headertmpl)
  let html = tmpl({})
  $('#app').append(html)

tmpl = Handlebars.compile(indextmpl)
  html = tmpl({})
  $('#app').append(html)

let api_url = 'http://127.0.0.1:3000'

fetch(api_url).then(function(resp) {
  resp.json().then(function(movies) {
    console.log(movies)
  })
})

