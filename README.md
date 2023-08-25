# remix-supabase-auth

![GitHub](https://img.shields.io/github/license/your-username/remix-supabase-auth)
![GitHub stars](https://img.shields.io/github/stars/your-username/remix-supabase-auth)
![GitHub forks](https://img.shields.io/github/forks/your-username/remix-supabase-auth)

## Description

This project is an example of how to access Supabase Auth and Database using web standards, based on the Remix JS philosophy. It demonstrates the cookie-based authentication flow and implements this functionality using Remix and Supabase.

## Video

Watch the video of this project on our YouTube channel: [remixjsbrasil](https://www.youtube.com/remixjsbrasil)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Collaboration

Contributions are very welcome! Feel free to open issues and pull requests in this repository.

## Resources

- [Remix JS](https://remix.run/) - JavaScript framework for building modern web applications based on web standards.
- [Supabase](https://supabase.io/) - Development platform that combines database and authentication.
- [Link to Project Documentation](docs/) - Here you'll find more information on setting up and running the project.

## Setup

1. Clone this repository: `git clone https://github.com/your-username/remix-supabase-auth.git`
2. Install dependencies: `npm install`
3. Configure your environment variables in the `.env` file (refer to `.env.example`).
4. Run the project: `npm run dev`

## Basic Workflow

1. Users access the application.
2. The application checks for the presence of the authentication cookie.
3. If the cookie is present, the user is considered authenticated and can access protected resources.
4. If the cookie is not present, the user is redirected to the authentication page.
5. Users can log in or register a new account using Supabase Auth.
6. After successful login, an authentication cookie is set.
7. Authenticated users can interact with protected resources, accessing Supabase Database data.

## Acknowledgments

We thank Remix JS and Supabase for providing powerful tools for modern web application development.

---

This project is an educational and demonstrative example. Be sure to review and adapt the code according to best practices and the specific requirements of your project.
