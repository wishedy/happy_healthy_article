import { json2Query } from '@/libs/utils'
const Resource = require('./create-api')
const { api } = Resource
export function getArticle (params) {
  console.log(params)
  return api.get(`/api/sysArticle/query?${json2Query(params)}`)
}
