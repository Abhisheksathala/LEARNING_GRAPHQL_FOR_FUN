export const schema = `#graphql


type user{
  _id:ID!
  name:String!
  email:String!
  password:String!
  googleId:String!
  role:String!
  avatar:String!
  verified:Boolean!
  CreatedAt:String!
  UpdatedAT:String!
}



type course {
  _id:ID!
  title:String!
}

  type Query{
    hello:String,
    hello2:String
    users:[user]
    user(id:ID!):user
    courses:[course]
    }
`;
