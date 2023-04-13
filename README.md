# Web-API-Frontend-with-React

Frontend for the REST API developed in https://github.com/monicahomescu/Web-API-in-ASP.NET-Core. It is a `Single Page Application (SPA)` that implements `CRUD` and one `statistical report` for the `Guests` entity. The interface is intuitive and self-explanatory by using the `Components Library Material UI`. Users can navigate without manually editing the URL. Application is deployed to `Netlify` and usable by anyone with a link to it.

The navigation menu provides the following options to choose from:

- Guests:
  - view all Guests
  - add a new Guest (plus icon)
  - delete a Guest (trash icon) - confirmation is requested from user
  - update a Guest (pencil icon) - user can choose to update any attribute
  - view full details of a Guest (FirstName or details icon) - once details are displayed (all attributes and associated Screenings), user can also decide to delete or update the Guest
  
- Guests wih average Screening seats:
  - view statistical report of ordered Guests based on the average number of seats from the Screenings they have tickets to
  
- Sorted Guests:
  - view all Guests in ascending order by FirstName

<img width="100%" height="100%" src="/demos/demo1.PNG">
