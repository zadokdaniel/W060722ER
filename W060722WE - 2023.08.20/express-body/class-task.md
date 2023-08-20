1.  create a new express project use morgan
2.  every requests which starts with public should be checked against a directory called static

3.  create the pages with styling the body element with the follwoing pages with links betweeen them
    all pages should have navigation to the others with an h1

        - index.html
        - about.html
        - contact-us.html
        	- should show a form which sends the name, email, message of a user using post
        - services.html
        - 404.html
        - styles/style.css

4.  end points

    - POST /contact-us - will receive as json or urlencoded name, email, message and save to an array. after registering the message redirect user to contact-us page
    - GET /messages - receive all pending messages as json including the date and time

    - POST /calc - receives the follwing interface
      {num1: number, num2: number, action: "+" | "-"}
      and response with the resulted number as an object
      {num1: number, num2: number, action: "+" | "-", result: number}

    - any other requests should be redirected to the 404 page
