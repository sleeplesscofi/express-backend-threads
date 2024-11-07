## Threads Clone

MiClonThreads is a social networking platform designed to facilitate communication and interaction between users through short posts and messages. Inspired by the functionality of Threads, this application allows users to share thoughts, news, and updates in real time, follow other users, and participate in conversations.

## Main Features

1. **Registration and Authentication**:

   - Users can create an account through a registration form.
   - Secure authentication with email and password.
   - Option to log in with social accounts (like Google or Facebook).

2. **User Profile**:

   - Each user has a personal profile that displays their basic information, posts, and followers.
   - Option to edit profile information and profile picture.

3. **Publications**:

   - Users can create, edit and delete posts.
   - Posts may contain text and links.
   - A reaction system (likes, comments) is implemented.

4. **Post Feed**:

   - A feed that displays posts from users the user follows, with the option to view popular posts.
   - Infinite scrolling to load more posts as the user scrolls down.

5. **User Tracking**:

   - Users can search and follow other users.
   - Notifications about new posts from followed users.

6. **Interactions**:

   - Users can comment on posts and view others' comments.
   - Possibility to respond to specific comments.

7. **Notifications**:

   - Real-time notification system about interactions (new followers, comments, etc.).

8. **Privacy Settings**:

   - Users can manage the privacy settings of their profile and posts.

9. **User Interface**:
   - Attractive and responsive design using Shadcn UI and Tailwind CSS.
   - Intuitive navigation with a quick access menu.

## Getting Started

1. Install the dependencies using the following command:

```bash
npm install
```
or
```bash
pnpm install
```

2. Run local db postgres with Docker

```bash
docker-compose up -d
```

3. Run prisma migrations

```bash
npx prisma migrate dev
```

or

```bash
pnpm dlx prisma migrate dev
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```