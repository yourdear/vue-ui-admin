import Mock from 'mockjs'
Mock.mock('/api/news', 'post', {
  'data|10': [
    {
      'id|+1': 1,
      'title|+1': Mock.Random.cword(8, 15)
    }
  ]
})
