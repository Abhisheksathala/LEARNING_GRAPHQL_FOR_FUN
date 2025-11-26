import mongoose from 'mongoose';
import User from '../model/user';

// ✅ Connect to local MongoDB
export default async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Graphql', {
    dbName: 'Graphql',
  });
  console.log('✅ Connected to MongoDB');
}

// ✅ Dummy data
const users = [
  {
    name: 'Abhishek Sathala',
    email: 'abhishek@example.com',
    password: '123456',
    role: 'Admin',
  },
  {
    name: 'Rahul Dev',
    email: 'rahul@example.com',
    password: 'password123',
    role: 'Member',
  },
  {
    name: 'Priya Sharma',
    email: 'priya@example.com',
    password: 'test@123',
    role: 'Member',
  },
];

// ✅ Seeder function
// const seedUsers = async () => {
//   try {
//     await connectDB();

//     // clear old data
//     await User.deleteMany();
//     console.log('🗑️ Old users removed');

//     // insert dummy data
//     await User.insertMany(users);
//     console.log('✅ Dummy users added');

//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error seeding users:', error);
//     process.exit(1);
//   }
// };

// seedUsers();
