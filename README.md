# Frontend-for-Web-API-with-React

Frontend for the REST API developed in https://github.com/monicahomescu/Web-API-in-ASP.NET-Core. It is a `Single Page Application (SPA)` that implements `CRUD` and one `statistical report` for the `Guests` entity. The interface is intuitive and self-explanatory by using the `Components Library Material UI`. Users can navigate without manually editing the URL. Application is deployed to `Netlify` and usable by anyone with a link to it.

The application provides a navigation menu with options to choose from:
- Guests:
  - view all Guests
  - add a new Guest by clicking the plus symbol
  - delete a Guest by clicking the trash icon associated to it (confirmation is requested)
  - update a Guest by clicking the pencil icon associated to it (user can choose to update any attribute)
  - view full details (attributes as well as associated Screenings) of a Guest by clicking on FirstName or the details icon associated to it (once details are displayed, user can also decide to delete or update the Guest)
- Guests wih average Screening seats:
  - view statistical report of ordered Guests based on the average number of seats from the Screenings they have tickets to
- Ordered Guests:
  - view all Guests ordered in ascending order by FirstName

<img width="100%" height="100%" src="/demos/demo1.PNG">
