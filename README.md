
# Dog Search

Using Dog Search application we can list the dogs


## Documentation

1. Created a page that shows a search box.
2. When a user attempts to enter into the search box any string longer than 3 characters, showed the possible matches (Images and Names only) at the bottom of the search bar.
3. Here, the user should not need to press enter. As soon as the fourth character is typed, added all the matching dogs below.
4. When the Fifth character is typed, removed the images which don't match those dogs without refreshing the page.
5. When the sixth character is typed, removed the images which didn't match the dogs so on.
## API Reference

#### https://api.thedogapi.com/v1

#### Get all breeds

```http
  GET /breeds/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Required**. |




## Run Locally

Clone the project

```bash
  git clone https://github.com/Srikanth4533/dog-breed.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** HTML, CSS, Javascript, React, Styled-Components

