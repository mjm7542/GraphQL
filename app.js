const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL 스키마 정의
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 루트 제공자(root resolver) 정의
const root = {
    hello: () => {
        return 'Hello, world!';
    },
};

// Express 서버 생성 및 GraphQL 미들웨어 설정
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GUI를 제공하는 GraphiQL 툴 활성화
}));

// 서버 시작
app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
